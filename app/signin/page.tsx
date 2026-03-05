import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './signin.module.css';

export const metadata: Metadata = {
    title: 'Sign In',
    description: 'Sign in to your LH44 fan account.',
};

export default function SignInPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}>
                <div className={styles.bgGrid}></div>
                <div className={styles.bgGlow}></div>
            </div>

            <div className={styles.card}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoLH}>LH</span>
                    <span className={styles.logo44}>44</span>
                </Link>

                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Sign in to your fan account to access exclusive content.</p>

                {/* Google Button */}
                <button className={styles.googleBtn} id="google-signin-btn" type="button">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                </button>

                <div className={styles.divider}>
                    <span className={styles.dividerLine}></span>
                    <span className={styles.dividerText}>or</span>
                    <span className={styles.dividerLine}></span>
                </div>

                {/* Email/Password Form */}
                <form className={styles.form} id="signin-form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="signin-email">Email Address</label>
                        <input className="form-input" id="signin-email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="signin-password">Password</label>
                        <input className="form-input" id="signin-password" type="password" placeholder="••••••••" required />
                    </div>
                    <div className={styles.forgotRow}>
                        <Link href="#" className={styles.forgotLink}>Forgot password?</Link>
                    </div>
                    <button type="submit" className="btn btn-primary" id="signin-submit" style={{ width: '100%', justifyContent: 'center' }}>
                        Sign In
                    </button>
                </form>

                <p className={styles.registerText}>
                    Don't have an account?{' '}
                    <Link href="#" className={styles.registerLink}>Create one free →</Link>
                </p>

                <p className={styles.disclaimer}>
                    By signing in you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
}
