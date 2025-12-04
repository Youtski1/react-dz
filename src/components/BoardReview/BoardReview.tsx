import type { Review as ReviewType } from "../../types/review";
import Review from "../Review/Review" ;

const reviews: ReviewType[] = [{
 id:1,
 title: "Хороший фильм",
 date: "2025-05-10",
 description: "фильм исба всем оыктвю двжк звурфтфми глвзви аишц отзфы"
}];

function BoardReview() {


    return (
        <div className="board">
            {reviews.map((review) => (
                <Review review={review}/>
            ))}
        </div>
    )
}

export default BoardReview