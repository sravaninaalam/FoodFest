const Footer = () => {
  return (
    <footer className="bg-gray-800 px-6 py-6 text-center text-sm text-gray-200">
      <p>© {new Date().getFullYear()} FoodFest. Built with React & Tailwind CSS.</p>
      <p className="mt-1 text-gray-400">Demo food ordering app for learning & interviews.</p>
    </footer>
  )
}

export default Footer
