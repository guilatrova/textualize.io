import React from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { SOCIAL_LINKS } from "../../constants"
import { Logo } from "../logo"

const DISPLAY_SCROLL_HINT = false // set to `true` to re-enable the floating down arrow

export const Footer = (): JSX.Element => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    })

    const footerClassNames = ["footer"]
    if (inView) {
        footerClassNames.push("footer--visible")
    }

    return (
        <div className="footer__wrapper">
            <footer className={footerClassNames.join(" ")} ref={ref}>
                {DISPLAY_SCROLL_HINT ? <div className="footer__scroll-hint" /> : null}
                <div className="footer__container container">
                    <div className="footer__links">
                        <div className="footer__link_row">
                            <div className="footer__link-head">About</div>
                            <Link href="/what-we-do">
                                <a className="footer__link">What we do</a>
                            </Link>
                            <Link href="/about-us">
                                <a className="footer__link">About us</a>
                            </Link>
                            <Link href="/contact-us">
                                <a className="footer__link">Contact</a>
                            </Link>
                            <Link href="/jobs">
                                <a className="footer__link">Jobs</a>
                            </Link>
                        </div>
                        <div className="footer__link_row">
                            <div className="footer__link-head">Legal</div>
                            <Link href="/privacy">
                                <a className="footer__link">Privacy Policy</a>
                            </Link>
                            <Link href="/terms">
                                <a className="footer__link">Terms</a>
                            </Link>
                        </div>
                    </div>
                    <div className="footer__brand">
                        <div>
                            <Link href="/">
                                <a>
                                    <Logo isFooter />
                                </a>
                            </Link>
                        </div>
                        <div className="footer__social-links">
                            {Object.entries(SOCIAL_LINKS)
                                .filter(([_name, linkData]) => linkData.appearsInFooter)
                                .map(([name, linkData]) => {
                                    return (
                                        <a
                                            href={linkData.url}
                                            aria-label={name}
                                            className="footer__social-link"
                                            target="_blank"
                                            rel="noreferrer"
                                            key={name}
                                        >
                                            <svg className="footer__social-link-icon">
                                                <use xlinkHref={linkData.xlinkHref} />
                                            </svg>
                                        </a>
                                    )
                                })}
                        </div>
                        <strong translate="no" className="footer__copyright">
                            © Textualize Inc.
                        </strong>
                    </div>
                </div>
                <div className="footer__ellipsis-container">
                    <div className="footer__ellipsis-wrapper">
                        <div className="footer__ellipsis"></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
