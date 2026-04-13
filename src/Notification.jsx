export default function Notification({color='green', value='notification!'}) {
  return (
    <div className="notification" style={{ color: color }}>{value}</div>
  )
}