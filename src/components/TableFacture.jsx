import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import { getFacture } from "../features/facture/factureSlice";

const data = [
  {
    key: "1",
    codefac: "0145-1455-86",
    type: "vente",
    date: "11/11/2023",
    fournisseur: "HP",
  },
  {
    key: "2",
    codefac: "0555-7844-44",
    type: "achat",
    date: "28/12/2023",
    fournisseur: "BIO pharma",
  },
];
const TableFacture = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const allFacture = useSelector(getFacture);
  console.log(allFacture);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "N° Facture",
      dataIndex: "NumFac",
      key: "NumFac",
      width: "20%",
      ...getColumnSearchProps("NumFac"),
    },
    {
      title: "Journaux",
      dataIndex: "journaux",
      key: "journaux",
      width: "15%",
      ...getColumnSearchProps("journaux"),
    },
    {
      title: "Client / Fournisseur",
      dataIndex: "clFr",
      key: "clFr",
      ...getColumnSearchProps("clFr"),
      sorter: (a, b) => a.clFr.length - b.clFr.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps("date"),
      sorter: (a, b) => a.date - b.date,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Fichier",
      dataIndex: "fichier",
      key: "fichier",
      ...getColumnSearchProps("fichier"),
      render: (text) => (
        <a href={`/src/assets/Facture/${text}`}>Ouvrir {text}</a>
      ),
    },
  ];
  return <Table columns={columns} dataSource={allFacture} />;
};
export default TableFacture;
