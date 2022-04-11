import React from "react";
import { NavLink } from "react-router-dom";

const FAQs = () => {
  return (
    <>
      <div className="faq-header" >
        <h3>Frequently Asked Questions
        </h3>
      </div>
      <div className="faq-content">
        <div className="faq-question">
          <input id="q1" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q1" className="panel-title">
            How is quality ensured?
          </label>
          <div className="panel-content">
            For each task we select corresponding Clickworkers according to
            their individual skills. These skills have been verified through
            trainings and tests. Furthermore, their skills are continuously
            subjected to evaluation based on the work results. In addition, the
            high quality of the work results are secured by special quality
            management measures such as statistic process control, audits, peer
            reviews and evaluation.
          </div>
        </div>

        <div className="faq-question">
          <input id="q2" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q2" className="panel-title">
            Where do you deliver?
          </label>
          <div className="panel-content">
            We can ship and deliver umbrellas all across the Egypt. We can
            deliver our umbrellas all around the Egypt. Our distribution
            warehouses are located in Egypt, Africa. We've also got stockists
            and dealers in regions across these countries and in regional hubs
            such as the UAE. We'll look to get your product to you as soon as
            possible.
          </div>
        </div>
        <div className="faq-question">
          <input id="q3" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q3" className="panel-title">
            When will my order be shipped?
          </label>
          <div className="panel-content">
            We know you're excited about your new purchase. For standard stock
            orders, we strive to have these dispatched within 48 hours of your
            order being placed and paid for. While you wait we'll send you
            information on how you can prep for your new umbrella. For custom
            products made to order, your lead time will be advised by your
            consultant. If you have not received a lead time from your
            consultant
          </div>
        </div>
        <div className="faq-question">
          <input id="q4" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q4" className="panel-title">
            How can I place orders?
          </label>
          <div className="panel-content">
            There are two ways to place orders for our services: By using the
            Self-Service Marketplace (only for text creation, surveys and
            sentiment analysis) or by placing an individual order and personal
            contact (managed service) to our sales team
          </div>
        </div>

        <div className="faq-question">
          <input id="q6" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q6" className="panel-title">
            Which method of ordering is best for me?
          </label>
          <div className="panel-content">
            In the areas of standardized text creation (with and without
            keywords), survey tasks and sentiment analysis, it is more
            advantageous and favorable for you to enter the order using the
            Self-Service Marketplace. If you have large, individual projects
            from any service areas offered, please contact our sales team. They
            will provide personal advice and discuss the project with you.{" "}
          </div>
        </div>
        </div>
        <div className="text-center">
          <h6>IF you Have any Other Question You Can Contact Us From Here !
          <NavLink
              to="/contact"
              className="btn btn-outline-dark  ms-2 px-3 py-2"
            >
              Contact Us
            </NavLink>
            </h6>
        </div>
    </>
  );
};

export default FAQs;
