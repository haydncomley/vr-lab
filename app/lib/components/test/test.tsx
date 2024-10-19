import styles from './test.module.scss';

interface TestProps {
    foo: string;
}

export const Test = ({
    foo
}: TestProps) => {
    return  (
        <div className={styles.test}>
            Hello {foo}
        </div>
    )
};

