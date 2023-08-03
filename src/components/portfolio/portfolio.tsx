import classNames from 'classnames';
import styles from './portfolio.module.scss';
import { motion } from 'framer-motion';

export interface PortfolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portfolio = ({ className }: PortfolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['portfolio-wrapper']}>
                <h3>My Portfolio</h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
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
                <p>
                    I am a web developer with a passion for creating beautiful and functional
                    websites. I have a strong understanding of{' '}
                    <span className={styles.span}>HTML, CSS, JavaScript</span>, and PHP, and I am
                    proficient in a variety of back-end frameworks. I am also a
                    <span> creative thinker </span>and I am always looking for new ways to solve
                    problems.
                </p>
            </div>
        </div>
    );
};
