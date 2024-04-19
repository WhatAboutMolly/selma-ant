import React from "react";
import { Avatar, List } from "antd";

import { useParams } from "react-router-dom";
import { ListChecks } from "lucide-react";
import AddTacheForm from "../components/AddTache";
import { useSelector } from "react-redux";
import { selectAllComptables } from "../features/comptables/comptableSlice";
import { selectUser } from "../features/user/userSlice";
import FormModal from "../components/FormModal";
import moment from "moment";

const ListTaches = () => {
  const { idClt } = useParams();
  const comptables = useSelector(selectAllComptables);
  const user = useSelector(selectUser);

  let comptable = comptables.filter((c) => c.numeroComptable == idClt)[0];
  let copyTache = comptable.listTaches.slice();
  let taches = copyTache.sort((a, b) =>
    moment(b.date, "DD/MM/YYYY").diff(moment(a.date, "DD/MM/YYYY"))
  );
  console.log(taches);
  return (
    <>
      {user.role == "EC" && (
        <FormModal numeroComptable={comptable.numeroComptable} />
      )}
      <List
        itemLayout="vertical"
        size="large"
        dataSource={taches}
        renderItem={(item, index) => (
          <List.Item
            extra={
              <a href={`http://localhost:8080/${item.fichier}`}>
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
              title={<a href="https://ant.design">{item.par}</a>}
              description={item.date}
            />
            {item.description}
          </List.Item>
        )}
      />
    </>
  );
};
export default ListTaches;
