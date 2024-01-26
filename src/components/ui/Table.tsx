import "./Table.css"

interface TableProps {
  entries: Array<[string, string]>
}

function Table({ entries }: TableProps) {
  return (
    <table className="Table">
      <tbody>
        {entries.map(entry => (
          <tr key={entry[0]}>
            <th>{entry[0]}</th>
            <td>{entry[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
