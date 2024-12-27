import styles from './banner.module.css';

function Banner({image}) {
    return (
        <div className={styles.banner} style={{backgroundImage: `url('/images/banner-${image}.png')`}}>
        </div>
    )
}

export default Banner;