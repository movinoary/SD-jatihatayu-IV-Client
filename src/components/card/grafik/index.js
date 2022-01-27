import ReactApexChart from "react-apexcharts";
import './style.css'

function CardGrafik(props) {
  const series = [
    {
      name: 'Nilai',
      data: [props.datanilai]
    }, {
      name: 'Maximal',
      data: [500000000]
    }
  ];
  const options = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
        sparkline: {
            enabled: true
          },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      colors: ['#4E9F3D', '#D8E9A8'],
      fill: {
        opacity: 1
      },
      xaxis: {
        categories: [2021],
      },
      title: {
        text: props.judulnilai,
        offsetX: 0,
        style: {
          fontSize: '20px',
        }
      },
      subtitle: {
        text: props.judul,
        offsetX: 0,
        style: {
          fontSize: '13px',
        }
      }
  }
  return (
    <div id="chart" className='card-anggaran' data-aos="flip-up" data-aos-duration="1500">
        <div className='card-angg-icon'>
            <i className={props.icon} />
        </div>
        <div className='card-angg-chart'>
          <ReactApexChart options={options} series={series} type="bar" height={80}/>
        </div>
    </div>
  );
}




export default CardGrafik