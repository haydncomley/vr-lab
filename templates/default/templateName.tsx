import styles from './templateName.module.scss';

interface TemplateNameProps {
    foo: string;
}

export const TemplateName = ({
    foo
}: TemplateNameProps) => {
    return  (
        <div className={styles.templateName}>
            Hello {foo}
        </div>
    )
};

