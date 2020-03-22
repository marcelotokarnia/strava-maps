import Activity from "./Activity";
import React from "react";

export default ({ activities }) =>
  activities.map(activity => (
    <Activity key={activity.id} activity={activity} />
  ));
