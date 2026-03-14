// menuItem for the profile
export const MenuItem = ({ onClick, text, red }) => {
    return (
      <div
        onClick={onClick}
        className={`px-4 py-4 cursor-pointer font-semibold text-sm rounded-md ${red ? 'text-red-500 hover:bg-red-300/20' : "hover:bg-white/20"}`}>
        {text}
      </div>
    )
  }