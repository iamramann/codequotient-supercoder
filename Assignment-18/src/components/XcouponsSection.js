/* ; */
import img from "../images/coupon.jpg";
function InfoSection() {
  return (
    <section class="coupons-section">
      <div class="container grid text-center">
        <div class="coupons-section-img">
          <img src={img} style={{ width: "70%" }} alt="" />
        </div>
        <div class="coupons-section-text">
          <h1>Coupons</h1>
          <p>
            You can apply different coupons to get extra discount on selected
            courses.Certain internet providers exploit the fact that fill text
            cannot be recognized by automatic search engines - meaningful
            information cannot be distinguished from meaningless:
            Target-generated dummy text mixed with a certain combination of
            search terms can lead to an increased frequency of visits by search
            machine users. As a consequence, advertising revenues, which rely on
            website 'hits', are increased.
          </p>
          <h3>Already have Coupon?</h3>
          <hr />
          <a href="/test">
            <i class="fas fa-arrow-circle-right">&nbsp;Redeem Here</i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
