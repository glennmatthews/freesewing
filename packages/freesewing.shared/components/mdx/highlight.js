const names = {
  js: 'javascript',
  bash: 'bash',
  sh: 'shell',
}

const Highlight = (props) => {
  const {
    children=[],
    className='language-js',
  } = props
  const language = props.children.props.className.split('-').pop()

  return (
    <div className="hljs my-4">
      <div className={`text-xs uppercase font-bold text-neutral-content mt-1 text-center border-b border-neutral-content border-opacity-25 py-1 mb-2 lg:text-sm`}>
        {names[language] ? names[language] : language}
      </div>
      <pre className={`language-${language} hljs text-base lg:text-lg whitespace-pre-wrap break-words`}>
        {children}
      </pre>
    </div>
  )
}

export default Highlight

