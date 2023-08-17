import classNames from 'classnames';
import styles from './portofolio.module.scss';
import website_1 from '../../assets/sushi-thumbnail.png';
import website_2 from '../../assets/pix_edit-thumbnail.png';
import website_3 from '../../assets/rock_paper_thumbnail.png';
import website_4 from '../../assets/weater_app_thumbnail.png';
import linkedIn from '../../assets/linkedin.svg'
import GitHub from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import { motion, useMotionValue, useTransform } from 'framer-motion';

export interface PortofolioProps {
    className?: string;
}

export const Portofolio = ({ className }: PortofolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['portofolio-wrapper']}>
                <h3 className={styles.h3}>My Portfolio</h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(styles.line, styles.path)}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className={styles['path-line']}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DC3284" />
                            <stop offset="1" stop-color="#DC3232" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <p className={styles.p}>
                I am a web developer with a passion for creating beautiful and functional websites.
                I have a strong understanding of{' '}
                <span className={styles.span}>HTML, CSS, JavaScript</span>, and PHP, and I am
                proficient in a variety of back-end frameworks. I am also a{' '}
                <span className={styles.span}>creative thinker</span> and I am always looking for
                new ways to solve problems.
            </p>
            <p className={styles.p}></p>
            <div className={styles.grid}>
                <motion.div className={styles['grid-item']}>
                    <img src={website_1} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Sushi</h4>
                        <a href="https://akshay-k-bhat.github.io/Sushi/">Visit </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website_2} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Pix-Edit</h4>
                        <a href="https://akshay-k-bhat.github.io/Pix-Edit/index.html">Visit </a>
                    </div>
                </motion.div>
                <motion.div className={styles['grid-item']}>
                    <img src={website_3} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Stone-Paper-Scissor</h4>
                        <a href="https://anjanabhat12.github.io/rock-paper-scissors/">Visit </a>
                    </div>
                </motion.div>
                <motion.div className={styles['grid-item']}>
                    <img src={website_4} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Weather App</h4>
                        <a href="https://anjanabhat12.github.io/weather_app/">Visit</a>
                    </div>
                </motion.div>
            </div>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/anjana-bhat-467228256/">
                    <img src={linkedIn} alt="" />
                </a>
                <a href="https://github.com/anjanabhat12">
                    <img src={GitHub} alt="" />
                </a>
                <a href="https://twitter.com/AnjanaBhat4">
                    <img src={twitter} alt="" />
                </a>
            </div>
        </div>
    );
};
