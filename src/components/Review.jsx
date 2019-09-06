import React from "react";
import ShowMoreText from "react-show-more-text";

const Review = props => {
  return (
    <div className="col s12 m10 offset-m1">
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          {/* <table>
            <tbody>
              <tr>
                <th class="centered">
                  <div>
                    <img
                      src={props.review.user.profile_image}
                      alt="profile image"
                      class="circle responsive-img"
                    />
                  </div>
                  <p>{props.review.user.name}</p>
                </th>
                <td>
                  <p>{props.review.review_text}</p>
                </td>
              </tr>
            </tbody>
          </table> */}
          <div className="col s2">
            <div>
              <img
                src={props.review.user.profile_image}
                alt="profile image"
                class="circle responsive-img"
              />
            </div>
            <h6>{props.review.user.name}</h6>
          </div>
          <div className="col s10">
            <p>
              <ShowMoreText
                lines={5}
                more="Show more"
                less="Show less"
                anchorClass=""
                expanded={false}
              >
                {props.review.review_text}
              </ShowMoreText>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;