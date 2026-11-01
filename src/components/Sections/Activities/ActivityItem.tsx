import { FC, memo } from "react";
import { ActivityElement } from "../../../data/dataDef";

const ActivityItem: FC<{ item: ActivityElement }> = memo(({ item }) => {
  const { content, link } = item;

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <h4>{content}</h4>
        </div>
      </div>
      {link && (
        <a
          className="self-center rounded-sm text-sm font-medium text-neutral-800 underline decoration-orange-400 underline-offset-4 hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 md:self-start"
          href={link.href}
          hrefLang={link.hrefLang}
        >
          {link.text}
        </a>
      )}
    </div>
  );
});

ActivityItem.displayName = "ActivityItem";
export default ActivityItem;
