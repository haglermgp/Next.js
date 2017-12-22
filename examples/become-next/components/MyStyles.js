import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid red',
  color: 'blue',
  fontWeight: 'bold'
}

const Styles = props => (
	<div style={layoutStyle} >
		{props.children}
	</div>
)

export default Styles