import { FC, memo } from "react";
import { ActivityElement } from "../../../data/dataDef";

const ActivityItem: FC<{ item: ActivityElement }> = memo(({ item }) => {
  const { content } = item;

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <h4>{content}</h4>
        </div>
      </div>
    </div>
  );
});

ActivityItem.displayName = "ActivityItem";
export default ActivityItem;
