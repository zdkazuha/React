import { useState } from 'react';
import Review from "./Review";
import CreateReview from "./CreateReview";

export default function ReviewList ({list}) {

    const [reviewList, setList] = useState(list);

    function createReview(review) {
        const newId = reviewList.length > 0 ? Math.max(...reviewList.map(i => i.id)) + 2 : 1;
        review.id = newId;
        setList([...reviewList, review]);
    }

    return ( 
        <div className="Resviews">
            <CreateReview onCreate={createReview} />
            {
                list.length === 0 ? 
                    <p>Немає відгуків</p> :
                <ul className="ReviewList">
                    {reviewList.map(review => <Review key={review.id} {...review} />)}
                </ul>
            }
        </div>
     );
}
