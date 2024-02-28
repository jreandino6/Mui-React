import {
    TableContainer,
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell, 
    Paper
} from "@mui/material";

export const MuiTable = () => {
  return (
   <TableContainer component={Paper} sx={{ maxHeight:"320px"}}>
    <Table aria-label="simple table" stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell align="center">Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            { tableData.map((row) =>(
                    <TableRow 
                    key={row.id}
                        sx={{ "&:last-child ts, &:last-child th" : {border: 0}}}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>

                    </TableRow>

                 ))
                }
        </TableBody>
    </Table>
   </TableContainer>
  )
}

const tableData =
    [{
        "id": 1,
        "first_name": "Alistair",
        "last_name": "Marlih",
        "email": "marlih0@nyu.edu",
        "gender": "Male",
        "ip_address": "242.128.23.67"
      }, {
        "id": 2,
        "first_name": "Jassy",
        "last_name": "Walter",
        "email": "jwalter1@mac.com",
        "gender": "Female",
        "ip_address": "173.215.27.153"
      }, {
        "id": 3,
        "first_name": "Arla",
        "last_name": "Owen",
        "email": "aowen4@google.cn",
        "gender": "Female",
        "ip_address": "110.10.173.180"
      }, {
        "id": 4,
        "first_name": "Lycah",
        "last_name": "Reynheart",
        "email": "lyreynheart3@kickstarter.com",
        "gender": "Female",
        "ip_address": "225.103.9.8"
      }, {
        "id": 5,
        "first_name": "Vista",
        "last_name": "Henson",
        "email": "vhenson4@wunderground.com",
        "gender": "Genderfluid",
        "ip_address": "11.31.116.144"
      }, {
        "id": 6,
        "first_name": "Valerie",
        "last_name": "Berlin",
        "email": "vberlin5@cbsnews.com",
        "gender": "Female",
        "ip_address": "111.157.233.165"
      }, {
        "id": 7,
        "first_name": "Carys",
        "last_name": "Galla",
        "email": "cgalla7@blogspot.com",
        "gender": "Female",
        "ip_address": "1.26.96.71"
      }, {
        "id": 8,
        "first_name": "Kaile",
        "last_name": "Symon",
        "email": "ksyms3@patch.com",
        "gender": "Female",
        "ip_address": "89.27.29.201"
      }, {
        "id": 9,
        "first_name": "Rocky",
        "last_name": "Cielo",
        "email": "rcielo0@skyrock.com",
        "gender": "Male",
        "ip_address": "35.145.158.50"
      }, {
        "id": 10,
        "first_name": "Mico",
        "last_name": "Breckman",
        "email": "mbreckman4@creativecommons.org",
        "gender": "Male",
        "ip_address": "141.81.189.31"
      }]