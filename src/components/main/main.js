import React from 'react'
import Chart from '../charts/Chart'
import Chart1 from '../charts/Chart1'
import './main.css'

const main = () => {
  //Ktra loi
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error+""+ errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
  return (
    <main>
      <div className='main-form'>
        <div className='chart-form'> 
          <span className='title-chart'> BIỂU ĐỒ DOANH THU </span>
          <select name="type" id="type" className='dropdown-chart'>
            <option value="tuan">1 Tuần</option>
            <option value="quy">1 Quý</option>
            <option value="nam">1 Năm</option>
          </select>
          <div className='bg-chart'>
          <ErrorBoundary>
          <Chart />
          </ErrorBoundary>
          </div>
        </div>
        <div className='chart1-form'>
          <span className='title-chart'> BIỂU ĐỒ PHIM BÁN CHẠY </span>
          <div className='bg-chart1'>
          <ErrorBoundary>
          <Chart1 />
          </ErrorBoundary>
          </div>
        </div>
      </div>
    </main>
  )
}
export default main;