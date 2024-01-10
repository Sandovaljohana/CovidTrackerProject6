import UseFetch from "../../services/UseFetch";
import Table from "./Table";

const MyTable = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = UseFetch(url + "countries");
  console.log(data);

  const myColumns = [
    {
      name: 'Flag',
      selector: 'flag',
      cell: (row) => <img className="imgTable" src={row.countryInfo.flag} alt="Flag" />,
    },
    {
      name: 'Country',
      selector: "country",
    },
    {
      name: 'Cases',
      selector: "cases",
    },
    {
      name: 'New Cases',
      selector: "todayCases",
    },
    {
      name: 'Deaths',
      selector: "deaths",
    },
    {
      name: 'New Deaths',
      selector: "todayDeaths",
    },
    {
      name: 'Recovered',
      selector: "recovered",
    },
    {
      name: 'Active',
      selector: "active",
    },
    {
      name: 'Critical',
      selector: "critical",
    },
    {
      name: 'Tested',
      selector: "tests",
    },
  ];

  if (data === null) {
    return <> Loading </>;
  }

  return (
   <div className="max-w-screen-xl mx-auto">
      <Table data={data} columns={myColumns} />
    </div>
  );
};

export default MyTable;
