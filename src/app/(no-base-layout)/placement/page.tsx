export default function Page() {
  return (
    <div className="text-white">
      {new Array(100).fill(0).map((_,i) => (
        <p key={i+1}>{i+1}. Placement Prompt Here</p>
      ))}
    </div>
  )
}