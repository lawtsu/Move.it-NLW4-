import styles from '../styles/components/Profile.module.css';

export function Profile (){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LawTsu.png" alt="Juliana Valle"/>
            <div>
                <strong>Juliana Valle</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    lvl 1
                </p>
            </div>
        </div>
        
    );
}