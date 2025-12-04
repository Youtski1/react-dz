import type { ReviewProps } from "./Review.props";
import styles from "./Review.module.css";

function Review({ review }: ReviewProps) {

    return (
        <div className={styles["review"]}>
            <div className={styles["head"]}>
                <p className={styles["review__title"]}>{review.title}</p>
                <p className={styles["review__date"]}>{review.date}</p>
            </div>
            <div className={styles["main"]}>
                <p className={styles["review__description"]}>{review.description}</p>
            </div>
        </div>
    );
}

export default Review;