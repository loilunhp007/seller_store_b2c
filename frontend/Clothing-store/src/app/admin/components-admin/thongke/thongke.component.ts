import { Component, OnInit } from '@angular/core';
import { ArcElement, BarController, BarElement, BubbleController, CategoryScale, Chart, DoughnutController, Filler, Legend, LinearScale, LineController, LineElement, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, ScatterController, TimeScale, TimeSeriesScale, Title, Tooltip } from 'chart.js';
import { Product } from 'src/app/entity/product';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./../../../../assets/admin/css/styles.css']
})
export class ThongkeComponent implements OnInit {

  constructor(private productService:ProductService,
    private orderDetailService:OrderDetailService,
    private orderService:OrderService) { }
  canvas1: any;
  ctx1: any;
  canvas2: any;
  ctx2: any;
  canvas3: any;
  ctx3: any;
  products:Array<Product>
  luotXem:any = []
  nameproduct:any = []
  spbanra:any=[]
  doanhthu:any=[]
  userId:String
  select = 1
  select2=1
  myChart1:Chart
  myChart2:Chart
  myChart3:Chart
  months:any=[{name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'},{name:'6'},{name:'7'},{name:'8'},{name:'9'},{name:'10'},{name:'11'},{name:'12'}]
  ngOnInit(): void {
    this.loadChart();
    
    Chart.register(
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Filler,
      Legend,
      Title,
      Tooltip
    );
    this.getValueWithAsync();
  }
  private thongkespTheoluotxem(luotxem:any[],nameproduct:any[]){
    this.canvas1 = document.getElementById('myChart1');
    this.ctx1 = this.canvas1.getContext('2d');
    this.ctx1 = 'myChart1'
     this.myChart1 = new Chart(this.ctx1, {
      type: 'bar',
      data: {
        labels: nameproduct,
        datasets: [
          {
            label: 'Luot xem',
            data: luotxem,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
  }
  private ThongKesoluongbanra(name:any[],spbanra:any[]){
    this.canvas2 = document.getElementById('myChart2');
    this.ctx2 = this.canvas2.getContext('2d');
    this.ctx2 = 'myChart2'
   this.myChart2 = new Chart(this.ctx2, {
      type: 'bar',
      data: {
        labels: name,
        datasets: [
          {
            label: 'Tổng đơn hàng ',
            data: spbanra,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  private thongkeDoanhthu(name:any[],doanhthu:any[]){
    this.canvas3 = document.getElementById('myChart3');
    this.ctx3 = this.canvas3.getContext('2d');
    this.ctx3 = 'myChart3'
    this.myChart3 = new Chart(this.ctx3, {
      type: 'bar',
      data: {
        labels: name,
        datasets: [
          {
            label: 'Doanh thu',
            data: doanhthu,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  private loadChart(){
    this.productService.getProducts().toPromise().then(
      Response=>{
        this.products=Response
        this.orderDetailService.ThongKeSP(this.select,4).toPromise().then(
          Response2=>{
            this.spbanra = Response2;
          }
        )
        this.orderDetailService.thongKeDoanhthu(this.select).toPromise().then(
          Response3=>{
            this.doanhthu=Response3;
          }
        )
        this.products.forEach(data=>{
          this.nameproduct.push(data.productName);
          this.luotXem.push(data.price);
         
        
            }
          
            
        )
      }
    );
  }
  exit() {
    location.reload();
  }
  resolveAfter3Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.thongkespTheoluotxem(this.luotXem,this.nameproduct);
        this.ThongKesoluongbanra(this.nameproduct,this.spbanra)
        this.thongkeDoanhthu(this.nameproduct,this.doanhthu);
      }, 1000);
    });
}
async getValueWithAsync() {
  const value = <number>await this.resolveAfter3Seconds(20);
}
selected(select:number){
  
  this.myChart3.destroy();
  this.doanhthu =[];
  this.orderDetailService.thongKeDoanhthu(this.select).toPromise().then(
    Response3=>{
      this.doanhthu=Response3;
    }
  )
    
  
  setTimeout(()=>{
    this.thongkeDoanhthu(this.nameproduct,this.doanhthu);
    
  },1000)
  
  console.log(this.select);
}
  selected2(select:number){
    this.myChart2.destroy();
    this.spbanra=[];
    this.orderDetailService.ThongKeSP(this.select2,4).toPromise().then(
      Response2=>{
        this.spbanra = Response2;
      }
    )
    setTimeout(()=>{
      this.ThongKesoluongbanra(this.nameproduct,this.spbanra);
    },1000)
  }

}
