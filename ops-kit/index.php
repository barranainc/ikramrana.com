<?php
/**
 * The AI Business Ops Kit - Dashboard & Delivery Page
 * Secure password gate and resource delivery page for ikramrana.com.
 * Verified and server-side protected.
 */

// Start secure session for rate limiting
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Config Constants
define('OPS_KIT_PASSWORD', 'OPSKIT30');
define('ACCESS_COOKIE_NAME', 'opskit_access');
define('COOKIE_SECRET', 'ops_kit_secure_sig_981273918'); // Secret key to sign access cookies

// Welcome Video Configuration (Paste unlisted YouTube or Loom URL here)
// e.g., 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' or 'https://www.loom.com/share/...'
$WELCOME_VIDEO_URL = ''; 

// Helper: Sign cookie value to prevent tampering
function get_signed_cookie_value($value) {
    $signature = hash_hmac('sha256', $value, COOKIE_SECRET);
    return $value . '|' . $signature;
}

// Helper: Verify signed cookie
function verify_signed_cookie($cookie_val) {
    if (empty($cookie_val)) return false;
    $parts = explode('|', $cookie_val);
    if (count($parts) !== 2) return false;
    list($value, $signature) = $parts;
    $expected_signature = hash_hmac('sha256', $value, COOKIE_SECRET);
    return hash_equals($expected_signature, $signature) && $value === '1';
}

// Helper: Parse Loom or YouTube URL into embed iframe HTML
function get_video_embed_html($url) {
    if (empty($url)) {
        return '
        <div class="video-placeholder">
            <div class="video-placeholder-inner">
                <div class="video-play-icon">▶</div>
                <div class="video-placeholder-text">WELCOME VIDEO COMING RIGHT UP</div>
            </div>
        </div>';
    }
    
    // YouTube link parser
    if (preg_match('/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/', $url, $matches)) {
        $video_id = $matches[1];
        return '<iframe src="https://www.youtube.com/embed/' . htmlspecialchars($video_id) . '?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    
    // Loom link parser
    if (preg_match('/loom\.com\/(?:share|embed)\/([^"&?\/ ]+)/', $url, $matches)) {
        $video_id = $matches[1];
        return '<iframe src="https://www.loom.com/embed/' . htmlspecialchars($video_id) . '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    }
    
    // Default iframe fallback
    return '<iframe src="' . htmlspecialchars($url) . '" allowfullscreen></iframe>';
}

$error_msg = '';

// Handle Password Verification POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'unlock') {
    $now = time();
    if (!isset($_SESSION['login_attempts'])) {
        $_SESSION['login_attempts'] = [];
    }

    // Filter attempts to the last 60 seconds
    $_SESSION['login_attempts'] = array_filter($_SESSION['login_attempts'], function($timestamp) use ($now) {
        return ($now - $timestamp) < 60;
    });

    // Simple session-based rate limiting (max 10 attempts/min)
    if (count($_SESSION['login_attempts']) >= 10) {
        $error_msg = "Too many attempts. Please wait a minute and try again.";
    } else {
        $_SESSION['login_attempts'][] = $now;
        $password = isset($_POST['password']) ? trim($_POST['password']) : '';

        if ($password === OPS_KIT_PASSWORD) {
            // Reset attempts on successful login
            $_SESSION['login_attempts'] = [];
            
            // Set signed cookie for 90 days
            $cookie_value = get_signed_cookie_value('1');
            $expiry = time() + (90 * 24 * 60 * 60);
            
            // Detect secure HTTPS
            $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443;
            
            setcookie(ACCESS_COOKIE_NAME, $cookie_value, [
                'expires' => $expiry,
                'path' => '/',
                'secure' => $secure,
                'httponly' => true,
                'samesite' => 'Lax'
            ]);
            
            // Redirect to prevent form resubmission and clean URL
            header("Location: /ops-kit/");
            exit;
        } else {
            $error_msg = "That's not it. Check your purchase email for the exact password, or reach me at the email on ikramrana.com and I'll get you in.";
        }
    }
}

// Check current access status
$has_access = false;
if (isset($_COOKIE[ACCESS_COOKIE_NAME])) {
    $has_access = verify_signed_cookie($_COOKIE[ACCESS_COOKIE_NAME]);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>The AI Business Ops Kit | Dashboard</title>
    
    <!-- Open Graph tags for share protection -->
    <meta property="og:title" content="The AI Business Ops Kit">
    <meta property="og:description" content="Buyer delivery and download dashboard.">
    <meta property="og:image" content="/assets/opskit-a8f3k1/Stan-Store-Cover.png">
    <meta property="og:type" content="website">

    <!-- Design System Typography from Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Instrument+Sans:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

    <style>
        /* Design System Reset & Variables */
        :root {
            --bg-dark: #0A0A0A;
            --bg-light: #FFFFFF;
            --accent: #C0EE0E;
            --text-white: #FFFFFF;
            --text-black: #1A1A1A;
            --text-grey-light: #BBB;
            --text-grey-dark: #6B6B6B;
            --font-heading: 'Bricolage Grotesque', sans-serif;
            --font-body: 'Instrument Sans', sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
        }
.content-body-panel {
    padding: 4rem;
    flex-grow: 1;
    max-width: 100% !important;
    width: 100% !important;
}
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: var(--font-body);
            background-color: var(--bg-dark);
            color: var(--text-white);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        /* Webkit scrollbars styling */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: var(--bg-dark);
        }
        ::-webkit-scrollbar-thumb {
            background: #222;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--accent);
        }

        /* Top Accent Bar */
        .accent-bar {
            height: 4px;
            background-color: var(--accent);
            width: 100%;
            position: sticky;
            top: 0;
            z-index: 1001;
        }

        /* General Typography */
        h1, h2, h3 {
            font-family: var(--font-heading);
            font-weight: 700;
            letter-spacing: -0.02em;
        }
		.btn {
    display: inline-block;
    background-color: var(--accent);
    color: #000000;
    font-family: var(--font-body);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    padding: 1rem 2rem;
    border: 2px solid var(--accent);
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    width: 32% !important;
    margin: 0 auto !important;
}

        .kicker {
            font-family: var(--font-mono);
            color: var(--accent);
            text-transform: uppercase;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            margin-bottom: 0.5rem;
            display: inline-block;
        }

        /* Premium Buttons */
        .btn {
            display: inline-block;
            background-color: var(--accent);
            color: #000000;
            font-family: var(--font-body);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            text-decoration: none;
            padding: 1rem 2rem;
            border: 2px solid var(--accent);
            border-radius: 2px;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            text-align: center;
        }

        .btn:hover {
            background-color: #000000;
            color: var(--accent);
            border-color: var(--accent);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-white);
            border: 2px solid #333;
        }

        .btn-secondary:hover {
            background: var(--text-white);
            color: var(--bg-dark);
            border-color: var(--text-white);
        }

        /* PAGE 1: PASSWORD GATE */
        .gate-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: calc(100vh - 4px);
            padding: 2rem 1.5rem;
            background-color: var(--bg-dark);
        }

        .gate-card {
            width: 100%;
            max-width: 440px;
            text-align: center;
            background-color: #111111;
            border: 1px solid #222;
            padding: 3.5rem 2.5rem;
            border-radius: 2px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .gate-card .kicker {
            margin-bottom: 1.25rem;
        }

        .gate-card h1 {
            font-size: 2.25rem;
            line-height: 1.15;
            margin-bottom: 1rem;
        }

        .gate-card .description {
            color: var(--text-grey-light);
            font-size: 0.95rem;
            margin-bottom: 2.5rem;
            line-height: 1.5;
        }

        .gate-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .gate-input {
            width: 100%;
            background-color: #181818;
            border: 1px solid #333;
            color: var(--text-white);
            padding: 1.1rem 1.2rem;
            font-family: var(--font-body);
            font-size: 1rem;
            border-radius: 2px;
            outline: none;
            transition: all 0.2s;
            text-align: center;
        }

        .gate-input:focus {
            border-color: var(--accent);
            background-color: #202020;
        }

        .gate-card .error-state {
            color: var(--accent);
            font-family: var(--font-body);
            font-size: 0.9rem;
            line-height: 1.5;
            text-align: left;
            margin-top: 0.5rem;
            background-color: rgba(192, 238, 14, 0.05);
            padding: 1rem;
            border-left: 3px solid var(--accent);
        }

        .gate-footer {
            font-family: var(--font-mono);
            color: #555;
            font-size: 0.75rem;
            margin-top: 3rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        /* PAGE 2: DASHBOARD LAYOUT */
        .dashboard-wrapper {
            display: flex;
            min-height: calc(100vh - 4px);
        }

        /* Sidebar navigation */
        .sidebar {
            width: 280px;
            background-color: var(--bg-dark);
            border-right: 1px solid #1A1A1A;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2.5rem 1.5rem;
            position: sticky;
            top: 4px;
            height: calc(100vh - 4px);
            flex-shrink: 0;
            z-index: 99;
        }

        .sidebar-top {
            display: flex;
            flex-direction: column;
            gap: 3.5rem;
        }

        .sidebar-brand {
            border-left: 3px solid var(--accent);
            padding-left: 0.75rem;
        }

        .sidebar-logo {
            font-family: var(--font-mono);
            color: var(--text-white);
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.05em;
            margin-bottom: 0.25rem;
        }

        .sidebar-sublogo {
            font-family: var(--font-mono);
            color: var(--accent);
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.05em;
        }

        .sidebar-nav {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .tab-btn {
            display: flex;
            align-items: center;
            background: none;
            border: none;
            color: var(--text-grey-light);
            font-family: var(--font-body);
            font-size: 0.95rem;
            font-weight: 600;
            padding: 0.8rem 1rem;
            cursor: pointer;
            text-align: left;
            transition: all 0.2s;
            border-left: 2px solid transparent;
            border-radius: 2px;
            width: 100%;
        }

        .tab-btn:hover {
            color: var(--text-white);
            background-color: #121212;
        }

        .tab-btn.active {
            color: var(--accent);
            background-color: #121212;
            border-left-color: var(--accent);
        }

        .sidebar-footer {
            font-family: var(--font-mono);
            font-size: 0.7rem;
            color: #555;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        /* Main content area */
        .main-content {
            flex-grow: 1;
            background-color: var(--bg-light);
            color: var(--text-black);
            display: flex;
            flex-direction: column;
        }

        /* Header band in main content */
        .content-header-band {
            background-color: var(--bg-dark);
            color: var(--text-white);
            padding: 3.5rem 4rem;
            border-bottom: 1px solid #1A1A1A;
            position: relative;
        }

        .content-header-band h1 {
            font-size: 2.75rem;
            line-height: 1.1;
            margin-bottom: 1rem;
        }

        .content-header-band .sub-text {
            color: var(--text-grey-light);
            font-size: 1.1rem;
            max-width: 700px;
            line-height: 1.5;
        }

        /* Main body panel container */
        .content-body-panel {
            padding: 4rem;
            flex-grow: 1;
            max-width: 960px;
            width: 100%;
        }

        /* Tab Panels */
        .tab-panel {
            display: none;
        }

        .tab-panel.active {
            display: block;
            animation: fadeIn 0.25s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* High-Impact Hero CTA Banner (Overview) */
       .hero-cta-banner {
    background-color: var(--bg-dark);
    border: 1px solid #1A1A1A;
    padding: 3rem;
    border-radius: 2px;
    color: var(--text-white);
    margin-bottom: 3rem !important;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    width: 90%;
    margin: 0 auto;
}
.hero-cta-content {
    text-align: center !important;
    margin: 0 68px !important;
}

        .hero-cta-banner::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            height: 200px;
            background-color: var(--accent);
            opacity: 0.04;
            filter: blur(60px);
            pointer-events: none;
        }

        .hero-cta-banner h2 {
            font-size: 2.25rem;
            line-height: 1.1;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
        }

        .hero-cta-banner p {
    color: var(--text-grey-light);
    font-size: 1.05rem;
    margin-bottom: 2.25rem;
    max-width: 100%;
    line-height: 1.6;
}

        .hero-cta-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        /* Stats Cards (Overview tab) */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .stat-card {
            background-color: #F9F9F9;
            border: 1px solid #EAEAEA;
            padding: 1.5rem;
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }

        .stat-label {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            color: var(--text-grey-dark);
            letter-spacing: 0.05em;
            font-weight: 500;
        }

        .stat-value {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-black);
        }

        /* Video Embed */
        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 ratio */
            height: 0;
            overflow: hidden;
            background-color: #121212;
            border: 1px solid #EAEAEA;
            margin-bottom: 3rem;
            border-radius: 2px;
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }

        .video-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #000000;
        }

        .video-placeholder-inner {
            text-align: center;
            padding: 1.5rem;
        }

        .video-play-icon {
            font-size: 3rem;
            color: var(--accent);
            margin-bottom: 1rem;
            opacity: 0.8;
            transition: transform 0.2s, opacity 0.2s;
        }

        .video-placeholder:hover .video-play-icon {
            transform: scale(1.1);
            opacity: 1;
        }

        .video-placeholder-text {
            font-family: var(--font-mono);
            color: var(--text-white);
            letter-spacing: 0.1em;
            font-size: 0.85rem;
            font-weight: 700;
        }

        /* First Step Callout Card */
        .content-callout {
            background-color: #FAFDE9;
            border-left: 6px solid #000000;
            padding: 2.25rem;
            color: var(--text-black);
            border-radius: 2px;
        }

        .callout-quote {
            font-size: 1.1rem;
            font-weight: 600;
            line-height: 1.5;
        }

        /* ZIP card (Downloads Tab) */
        .zip-card {
            background-color: var(--bg-dark);
            border: 1px solid #1A1A1A;
            color: var(--text-white);
            padding: 3rem;
            margin-bottom: 3rem;
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            position: relative;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .zip-card::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 250px;
            height: 250px;
            background-color: var(--accent);
            opacity: 0.03;
            filter: blur(80px);
            pointer-events: none;
        }

        .zip-card-top {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .zip-title {
            font-family: var(--font-heading);
            font-size: 1.6rem;
            font-weight: 700;
			text-align: center;
        }

        .zip-desc {
    color: var(--text-grey-light);
    font-size: 1rem;
    line-height: 1.5;
    max-width: 100%;
    text-align: center;
}
        }

        /* File list grid */
        .file-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        .file-card {
            background-color: #F9F9F9;
            border: 1px solid #EAEAEA;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1.75rem;
            border-radius: 2px;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .file-card:hover {
            border-color: #000000;
            background-color: #FFFFFF;
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
        }

        .file-meta-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
        }

        .file-title {
            font-family: var(--font-heading);
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-black);
            line-height: 1.2;
        }

        .file-info-badge {
            font-family: var(--font-mono);
            font-size: 0.7rem;
            color: var(--text-grey-dark);
            background-color: #EFEFEF;
            padding: 0.25rem 0.5rem;
            white-space: nowrap;
            font-weight: 500;
            border-radius: 1px;
        }

        .file-description {
            color: var(--text-grey-dark);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .file-actions {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            margin-top: 0.5rem;
        }

        .file-download-btn {
            flex-grow: 1;
            padding: 0.75rem 1.25rem;
            font-size: 0.85rem;
        }

        .file-view-link {
            font-family: var(--font-mono);
            font-size: 0.8rem;
            color: var(--text-black);
            text-decoration: underline;
            font-weight: 700;
            white-space: nowrap;
            transition: color 0.15s;
        }

        .file-view-link:hover {
            color: var(--text-grey-dark);
        }

        /* Tab 3: Support (Book Call CTA card) */
        .support-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .support-body-text {
            color: var(--text-grey-dark);
            font-size: 1.1rem;
            line-height: 1.5;
            max-width: 700px;
        }

        .calendly-placeholder-card {
            background-color: #F9F9F9;
            border: 1px solid #EAEAEA;
            padding: 3.5rem 2rem;
            text-align: center;
            border-radius: 2px;
        }

        .calendly-placeholder-card p {
            color: var(--text-grey-dark);
            font-family: var(--font-mono);
            font-size: 0.85rem;
            margin-bottom: 1.5rem;
        }

        .calendly-container {
            width: 100%;
            height: 680px;
            overflow: hidden;
            display: none;
            border: 1px solid #EAEAEA;
            border-radius: 2px;
        }

        .calendly-container iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }

        .calendly-link-fallback {
            display: inline-block;
            font-family: var(--font-mono);
            color: var(--text-black);
            text-decoration: underline;
            margin-top: 1.5rem;
            font-size: 0.85rem;
            font-weight: 700;
        }

        .calendly-link-fallback:hover {
            color: var(--text-grey-dark);
        }

        /* Tab 4: Newsletter */
        .newsletter-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .newsletter-body-text {
            color: var(--text-grey-dark);
            font-size: 1.1rem;
            line-height: 1.5;
            max-width: 700px;
        }

        .substack-embed-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            width: 100%;
        }

        .substack-iframe {
            background: white;
            border: 1px solid #EAEAEA;
            border-radius: 2px;
            max-width: 480px;
            width: 100%;
            height: 320px;
        }

        .newsletter-btn {
            width: 100%;
            max-width: 480px;
        }

        /* Footer band */
        .dashboard-footer {
            background-color: var(--bg-dark);
            border-top: 1px solid #1A1A1A;
            padding: 3rem 4rem;
            color: var(--text-grey-light);
            font-family: var(--font-mono);
            font-size: 0.75rem;
            line-height: 1.8;
            margin-top: auto;
        }

        .dashboard-footer-inner {
            max-width: 960px;
            margin: 0 auto;
        }

        /* Mobile bottom navigation bar */
        .mobile-nav-bar {
            display: none;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 68px;
            background-color: var(--bg-dark);
            border-top: 1px solid #1A1A1A;
            z-index: 1000;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
            .content-header-band {
                padding: 3rem 2.5rem;
            }
            .btn{
                width:100% !important;
            }
            .content-body-panel {
                padding: 3rem 2.5rem;
            }
        }

        @media (max-width: 768px) {
            .sidebar {
                display: none;
            }
            .btn{
                width:100% !important;
            }
            .mobile-nav-bar {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            .mobile-nav-bar .tab-btn {
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 0.5rem 0.25rem;
                font-size: 0.7rem;
                font-family: var(--font-mono);
                text-transform: uppercase;
                letter-spacing: 0.02em;
                flex-grow: 1;
                height: 100%;
                border-left: none;
                border-top: 2px solid transparent;
                text-align: center;
            }

            .mobile-nav-bar .tab-btn.active {
                border-top-color: var(--accent);
                background: none;
            }

            .main-content {
                padding-bottom: 68px; /* Offset for bottom nav bar */
            }

            .content-header-band {
                padding: 2.5rem 1.5rem;
            }

            .content-header-band h1 {
                font-size: 2.25rem;
            }

            .content-body-panel {
                padding: 2.5rem 1.25rem;
            }

            .hero-cta-banner {
                padding: 2rem 1.5rem;
                margin-bottom: 2rem;
            }

            .hero-cta-banner h2 {
                font-size: 1.75rem;
            }

            .hero-cta-actions {
                flex-direction: column;
                align-items: stretch;
                gap: 0.75rem;
            }

            .stats-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
                margin-bottom: 2.5rem;
            }

            .zip-card {
                padding: 2rem 1.5rem;
            }

            .file-grid {
                grid-template-columns: 1fr;
                gap: 1.25rem;
            }

            .file-card {
                padding: 1.5rem;
                gap: 1.25rem;
            }

            .file-actions {
                flex-direction: column;
                align-items: stretch;
                gap: 0.75rem;
            }

            .file-download-btn {
                order: 1;
            }

            .file-view-link {
                order: 2;
                text-align: center;
                display: block;
                padding: 0.5rem;
            }

            .calendly-placeholder-card {
                padding: 2.5rem 1.25rem;
            }

            .dashboard-footer {
                padding: 2.5rem 1.5rem;
            }
        }
    </style>
</head>
<body>

    <div class="accent-bar"></div>

    <?php if (!$has_access): ?>
    <!-- PAGE 1: THE PASSWORD GATE -->
    <div class="gate-wrapper">
        <div class="gate-card">
            <div class="kicker">THE AI BUSINESS OPS KIT</div>
            <h1>Enter your access password</h1>
            <p class="description">It's in your purchase confirmation email from Stan Store.<br>Can't find it? Check spam, or email me and I'll sort you out fast.</p>

            <form class="gate-form" method="POST" action="/ops-kit/">
                <input type="hidden" name="action" value="unlock">
                <input 
                    class="gate-input" 
                    type="text" 
                    name="password" 
                    placeholder="Your access password" 
                    autocapitalize="none" 
                    autocorrect="off" 
                    autocomplete="off" 
                    required
                >
                <button class="btn lock" type="submit" style="width:100% !important;">UNLOCK MY KIT</button>
            </form>

            <?php if (!empty($error_msg)): ?>
            <div class="error-state">
                <?php echo htmlspecialchars($error_msg); ?>
            </div>
            <?php endif; ?>

            <div class="gate-footer">
                ikramrana.com
            </div>
        </div>
    </div>

    <?php else: ?>
    <!-- PAGE 2: DASHBOARD LAYOUT -->
    <div class="dashboard-wrapper">
        
        <!-- DESKTOP SIDEBAR -->
        <aside class="sidebar">
            <div class="sidebar-top">
                <div class="sidebar-brand">
                    <div class="sidebar-logo">AI Business Ops</div>
                    <div class="sidebar-sublogo">Buyer Dashboard</div>
                </div>
                
                <nav class="sidebar-nav">
                    <button class="tab-btn active" data-tab="overview">
                        Dashboard Overview
                    </button>
                    <button class="tab-btn" data-tab="resources">
                        The Kit (6 Files)
                    </button>
                    <button class="tab-btn" data-tab="support">
                        Custom Automation
                    </button>
                    <button class="tab-btn" data-tab="newsletter">
                        Weekly Systems
                    </button>
                </nav>
            </div>
            
            <div class="sidebar-footer">
                ikramrana.com
            </div>
        </aside>

        <!-- MAIN CONTENT PANEL -->
        <main class="main-content">
            
            <!-- HEADER BAND -->
            <header class="content-header-band">
                <div class="kicker">YOU'RE IN</div>
                <h1 id="dashboard-title">Welcome back, Operator</h1>
                <p class="sub-text" id="dashboard-subtext">Everything is below. One instruction before you scroll: don't try to read it all today. Start with the Sprint Card, do Day 1 (it's 30 minutes), and let the system pull you through the week.</p>
            </header>

            <!-- CONTENT BODY PANEL -->
            <div class="content-body-panel">
                
                <!-- TAB 1: OVERVIEW PANEL -->
                <div class="tab-panel active" id="panel-overview">
                    
                    

                    <div class="stats-grid">
                        <div class="stat-card">
                            <span class="stat-label">LIFETIME ACCESS</span>
                            <span class="stat-value">ACTIVE</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-label">RESOURCES READY</span>
                            <span class="stat-value">6 ITEMS</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-label">CORE SYSTEM PHASE</span>
                            <span class="stat-value">DAY 1</span>
                        </div>
                    </div>

                    <h2 style="font-size: 1.75rem; margin-bottom: 1.5rem;">Start here: 60 seconds from me</h2>
                    <div class="video-container">
                        <?php echo get_video_embed_html($WELCOME_VIDEO_URL); ?>
                    </div>

                    <div class="content-callout">
                        <p class="callout-quote">"Your first 30 minutes: open the Sprint Card, do Day 1: build your Voice Profile and bulk-archive your inbox. Everything in this kit works twice as well after that one step."</p>
                    </div>
                </div>

                <!-- TAB 2: RESOURCES DOWNLOADS PANEL -->
                <div class="tab-panel" id="panel-resources">
                    <div class="zip-card">
                        <div class="zip-card-top">
                            <h3 class="zip-title">Download all resources at once</h3>
                            <p class="zip-desc">Get all 6 PDF documents in a single compressed ZIP archive (~600 KB) for instant offline access.</p>
                        </div>
                        <a class="btn btn-full" href="/assets/opskit-a8f3k1/AI-Business-Ops-Kit.zip" download>
                            DOWNLOAD EVERYTHING (.ZIP)
                        </a>
                    </div>

                    <div class="file-grid">
                        <!-- File 1: The Workbook -->
                        <div class="file-card">
                            <div class="file-card-top">
                                <div class="file-meta-header">
                                    <h3 class="file-title">1. The Workbook</h3>
                                    <span class="file-info-badge">49 pages &bull; 240 KB</span>
                                </div>
                                <p class="file-description">All 5 systems with worked examples. Your main guide for the 7-day sprint.</p>
                            </div>
                            <div class="file-actions">
                                <a class="btn file-download-btn" href="/assets/opskit-a8f3k1/AI-Business-Ops-Kit-Workbook.pdf" download>DOWNLOAD</a>
                                <a class="file-view-link" href="/assets/opskit-a8f3k1/AI-Business-Ops-Kit-Workbook.pdf" target="_blank">View File &rarr;</a>
                            </div>
                        </div>

                        <!-- File 2: The Prompt Pack -->
                        <div class="file-card">
                            <div class="file-card-top">
                                <div class="file-meta-header">
                                    <h3 class="file-title">2. The Prompt Pack</h3>
                                    <span class="file-info-badge">11 pages &bull; 95 KB</span>
                                </div>
                                <p class="file-description">Every prompt, numbered 00-15. Keep this one open next to your inbox.</p>
                            </div>
                            <div class="file-actions">
                                <a class="btn file-download-btn" href="/assets/opskit-a8f3k1/Prompt-Pack.pdf" download>DOWNLOAD</a>
                                <a class="file-view-link" href="/assets/opskit-a8f3k1/Prompt-Pack.pdf" target="_blank">View File &rarr;</a>
                            </div>
                        </div>

                        <!-- File 3: Worksheets & Trackers -->
                        <div class="file-card">
                            <div class="file-card-top">
                                <div class="file-meta-header">
                                    <h3 class="file-title">3. Worksheets & Trackers</h3>
                                    <span class="file-info-badge">8 pages &bull; 72 KB</span>
                                </div>
                                <p class="file-description">Print these: ops audit, voice profile, SOP builder, follow-up tracker, Friday review, scorecard.</p>
                            </div>
                            <div class="file-actions">
                                <a class="btn file-download-btn" href="/assets/opskit-a8f3k1/Worksheets-and-Trackers.pdf" download>DOWNLOAD</a>
                                <a class="file-view-link" href="/assets/opskit-a8f3k1/Worksheets-and-Trackers.pdf" target="_blank">View File &rarr;</a>
                            </div>
                        </div>

                        <!-- File 4: The 7-Day Sprint Card -->
                        <div class="file-card">
                            <div class="file-card-top">
                                <div class="file-meta-header">
                                    <h3 class="file-title">4. The 7-Day Sprint Card</h3>
                                    <span class="file-info-badge">1 page &bull; 44 KB</span>
                                </div>
                                <p class="file-description">One page. Print it, pin it, cross off each day.</p>
                            </div>
                            <div class="file-actions">
                                <a class="btn file-download-btn" href="/assets/opskit-a8f3k1/7-Day-Sprint-Card.pdf" download>DOWNLOAD</a>
                                <a class="file-view-link" href="/assets/opskit-a8f3k1/7-Day-Sprint-Card.pdf" target="_blank">View File &rarr;</a>
                            </div>
                        </div>

                        <!-- File 5: The 30-Minute Inbox -->
                        <div class="file-card">
                            <div class="file-card-top">
                                <div class="file-meta-header">
                                    <h3 class="file-title">5. The 30-Minute Inbox</h3>
                                    <span class="file-info-badge">7 pages &bull; 98 KB</span>
                                </div>
                                <p class="file-description">Build your Voice Profile and bulk-archive your inbox. Reclaim your focus in 30 minutes.</p>
                            </div>
                            <div class="file-actions">
                                <a class="btn file-download-btn" href="/assets/opskit-a8f3k1/The-30-Minute-Inbox.pdf" download>DOWNLOAD</a>
                                <a class="file-view-link" href="/assets/opskit-a8f3k1/The-30-Minute-Inbox.pdf" target="_blank">View File &rarr;</a>
                            </div>
                        </div>

                        <!-- File 6: Bonus Templates -->
                        <div class="file-card">
                            <div class="file-card-top">
                                <div class="file-meta-header">
                                    <h3 class="file-title">6. Bonus Templates</h3>
                                    <span class="file-info-badge">6 pages &bull; 86 KB</span>
                                </div>
                                <p class="file-description">Your one-click Notion templates, both video walkthroughs, and the finished onboarding email swipe copy.</p>
                            </div>
                            <div class="file-actions">
                                <a class="btn file-download-btn" href="/assets/opskit-a8f3k1/Bonus-Templates.pdf" download>DOWNLOAD</a>
                                <a class="file-view-link" href="/assets/opskit-a8f3k1/Bonus-Templates.pdf" target="_blank">View File &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: CUSTOM AUTOMATION (SUPPORT) PANEL -->
                <div class="tab-panel" id="panel-support">
                    <div class="support-wrapper">
                        <p class="support-body-text">This kit covers the systems every business needs. Yours probably has two or three it can't: intake, quoting, scheduling, reporting. Book a free 20-minute call, I'll map the fix live and tell you honestly whether it's worth automating.</p>
                        
                        <div class="calendly-placeholder-card" id="calendly-trigger-box">
                            <p>To load the 1-on-1 scheduling calendar widget, click below.</p>
                            <button class="btn" id="load-calendly-btn">SHOW CALENDAR</button>
                            <div>
                                <a class="calendly-link-fallback" href="https://calendly.com/ikramrana15" target="_blank">Open my calendar &rarr; calendly.com/ikramrana15</a>
                            </div>
                        </div>
                        
                        <div class="calendly-container" id="calendly-embed-container"></div>
                    </div>
                </div>

                <!-- TAB 4: WEEKLY SYSTEMS (NEWSLETTER) PANEL -->
                <div class="tab-panel" id="panel-newsletter">
                    <div class="newsletter-wrapper">
                        <p class="newsletter-body-text">No hype, no party tricks. Systems that survive contact with a real Monday morning.</p>
                        
                        <div class="substack-embed-container">
                            <iframe class="substack-iframe" src="https://ikramrana.substack.com/embed" scrolling="no"></iframe>
                            <a class="btn newsletter-btn" href="https://ikramrana.substack.com" target="_blank">JOIN THE NEWSLETTER</a>
                        </div>
                    </div>
                </div>

            </div>
<!-- HIGH-IMPACT HERO CTA BANNER -->
                    <div class="hero-cta-banner">
                        <div class="hero-cta-content">
                            <span class="kicker" style="margin-bottom: 0.75rem;">WANT IT BUILT FOR YOU?</span>
                            <h2>Bring me your messiest process</h2>
                            <p>This kit covers the systems every business needs. Yours probably has two or three it can't: intake, quoting, scheduling, reporting. Book a free 20-minute call, I'll map the fix live and tell you honestly whether it's worth automating.</p>
							<p>Book a free 20-minute call, I'll map the fix live and tell you honestly
whether it's worth automating.<p>
                            <div class="hero-cta-actions">
                                <a class="btn btn-primary" href="https://calendly.com/ikramrana15;"> Book Now</a>
                               
                            </div>
                        </div>
                    </div>
            <!-- FOOTER STRIP -->
            <footer class="dashboard-footer">
                <div class="dashboard-footer-inner">
                    <p>Questions or stuck on a step? Email me - address on ikramrana.com. I read everything. | &copy; <?php echo date('Y'); ?> Ikram Rana | ikramrana.com</p>
                </div>
            </footer>
        </main>

        <!-- MOBILE BOTTOM NAVIGATION BAR -->
        <nav class="mobile-nav-bar">
            <button class="tab-btn active" data-tab="overview">
                Home
            </button>
            <button class="tab-btn" data-tab="resources">
                Files
            </button>
            <button class="tab-btn" data-tab="support">
                Support
            </button>
            <button class="tab-btn" data-tab="newsletter">
                Systems
            </button>
        </nav>
    </div>

    <!-- Dashboard Scripts -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // 1. Tab Switching Functionality
            const tabs = document.querySelectorAll(".tab-btn");
            const panels = document.querySelectorAll(".tab-panel");
            const mainTitle = document.getElementById("dashboard-title");
            const mainSub = document.getElementById("dashboard-subtext");

            // Mapping header copy to each tab for premium app flow
            const headerCopy = {
                overview: {
                    title: "Welcome back, Operator",
                    sub: "Everything is below. One instruction before you scroll: don't try to read it all today. Start with the Sprint Card, do Day 1 (it's 30 minutes), and let the system pull you through the week."
                },
                resources: {
                    title: "Your Operations Vault",
                    sub: "Direct secure download links for the 6 core components of the AI Business Ops Kit. Open, print, or view each PDF directly."
                },
                support: {
                    title: "Bring me your messiest process",
                    sub: "Let's build custom automations together. Book a free live session below to map out solutions custom-fit to your business operations."
                },
                newsletter: {
                    title: "One practical AI system every week",
                    sub: "Join the Substack system list to receive weekly zero-hype workflows, onboarding recipes, and automations that survive contact with a real Monday morning."
                }
            };

            let activeTab = localStorage.getItem("opskit_active_tab") || "overview";

            window.switchTab = function(tabId) {
                // Remove active class from all tabs
                tabs.forEach(t => {
                    if (t.dataset.tab === tabId) {
                        t.classList.add("active");
                    } else {
                        t.classList.remove("active");
                    }
                });

                // Display targeted content panel
                panels.forEach(p => {
                    if (p.id === "panel-" + tabId) {
                        p.classList.add("active");
                    } else {
                        p.classList.remove("active");
                    }
                });

                // Update text headers dynamically
                if (headerCopy[tabId]) {
                    mainTitle.textContent = headerCopy[tabId].title;
                    mainSub.textContent = headerCopy[tabId].sub;
                }

                // Cache active tab
                localStorage.setItem("opskit_active_tab", tabId);

                // Smooth scroll back to top of main content
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            };

            tabs.forEach(tab => {
                tab.addEventListener("click", function(e) {
                    e.preventDefault();
                    window.switchTab(this.dataset.tab);
                });
            });

            // Initialize active tab
            window.switchTab(activeTab);

            // 2. Calendly Lazy-Loading Mechanism
            var loadBtn = document.getElementById("load-calendly-btn");
            var placeholder = document.getElementById("calendly-trigger-box");
            var container = document.getElementById("calendly-embed-container");

            if (loadBtn && placeholder && container) {
                loadBtn.addEventListener("click", loadCalendly);
            }

            // Lazy scroll trigger
            var observerOptions = {
                root: null,
                rootMargin: '120px',
                threshold: 0.1
            };

            var observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        loadCalendly();
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            if (placeholder) {
                observer.observe(placeholder);
            }

            function loadCalendly() {
                if (container.innerHTML.trim() === "") {
                    var iframe = document.createElement("iframe");
                    iframe.setAttribute("src", "https://calendly.com/ikramrana15?embed_domain=ikramrana.com&embed_type=inline");
                    iframe.setAttribute("width", "100%");
                    iframe.setAttribute("height", "100%");
                    iframe.setAttribute("frameborder", "0");
                    
                    container.appendChild(iframe);
                    container.style.display = "block";
                    placeholder.style.display = "none";
                }
            }
        });
    </script>
    <?php endif; ?>
</body>
</html>
