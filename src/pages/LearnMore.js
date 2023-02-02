import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es";
import { useParams } from "react-router-dom";
import { mySliceActions } from "../store/Slice";
import LearnMoreUI from "../UI/LearnMoreUI";
import HealthComp from "../components/LearnMore/HealthComp";
import FinanceComp from "../components/LearnMore/FinanceComp";
import CloudComp from "../components/LearnMore/CloudComp";

const LearnMore = () => {
  const { LearnMore } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mySliceActions.handleLearnMore());
  }, [LearnMore, dispatch]);

  return (
    <React.Fragment>
      {LearnMore === "Business" && <LearnMoreUI />}
      {LearnMore === "Health" && <HealthComp />}
      {LearnMore === "Finance&Banking" && <FinanceComp />}
      {LearnMore === "Cloud" && <CloudComp />}
    </React.Fragment>
  );
};

export default LearnMore;
