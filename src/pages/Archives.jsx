import React from "react";
import { useSelector } from "react-redux";
import { getArchive } from "../features/archive/archiveSlice";
import { Avatar, List } from "antd";
import { ListChecks } from "lucide-react";
import { selectUser } from "../features/user/userSlice";

export default function Archives() {
  const user = useSelector(selectUser);
  const archives = useSelector(getArchive);

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={archives}
        renderItem={(item, index) => (
          <List.Item
            extra={
              <a href={`/src/assets/${item.fichier}`}>
                <ListChecks />
              </a>
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.comptable}</a>}
              description={item.date}
            />
            Pour le client : {item.client}
          </List.Item>
        )}
      />
    </div>
  );
}
