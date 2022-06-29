import { Component, OnInit } from '@angular/core';
import tinyColor from 'tinycolor2';
import { ThemeService } from 'app/shared/services/theme.service';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.scss']
})
export class UserReportsComponent implements OnInit {
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;
  
  rows = [];
  ColumnMode = ColumnMode;

  temp = [
    { name: 'example1', date: '08-01-2020', time: '8:20 am' },
    { name: 'example2', date: '08-01-2020', time: '8:25 am' },
    { name: 'example3', date: '08-01-2020', time: '7:20 am' },
    { name: 'example4', date: '08-01-2020', time: '3:30 pm' },
    { name: 'example5', date: '08-01-2020', time: '6:22 am' },
    { name: 'example6', date: '08-01-2020', time: '5:05 am' },
    { name: 'example7', date: '08-01-2020', time: '9:29 am' },
    { name: 'example8', date: '08-01-2020', time: '1:00 am' },
    { name: 'example9', date: '08-01-2020', time: '2:00 pm' }
  ]

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.rows = this.temp;
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initTrafficVsSaleChart(activeTheme);
      this.initSessionsChart(activeTheme);
    });
    this.initTrafficVsSaleChart(this.themeService.activatedTheme);
    this.initSessionsChart(this.themeService.activatedTheme);    
  }
  
  initSessionsChart(theme) {
    this.sessionOptions = {
      tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: "#fff",
        extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); color: #444",
        axisPointer: {
          type: "line",
          animation: true
        }
      },
      grid: {
        top: "10%",
        left: "60",
        right: "15",
        bottom: "60"
      },
      xAxis: {
        type: "category",
        data: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
        ],
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          margin: 30,
          color: "#888"
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          margin: 20,
          color: "#888"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        }
      },
      series: [
        {
          data: [],
          type: "line",
          name: "User",
          smooth: true,
          color: tinyColor(theme.baseColor).toString(),
          lineStyle: {
            opacity: 1,
            width: 3
          },
          itemStyle: {
            opacity: 0
          },
          emphasis: {
            itemStyle: {
              color: "rgba(16, 23, 76, 1)",
              borderColor: "rgba(16, 23, 76, .4)",
              opacity: 1,
              borderWidth: 8
            },
            label: {
              show: false,
              backgroundColor: "#fff"
            }
          }
        }
      ]
    };
    this.sessionsData = [
      140,
      135,
      95,
      115,
      95,
      126,
      93,
      145,
      115,
      140,
      135,
      95,
      115,
      95,
      126,
      125,
      145,
      115,
      140,
      135,
      95,
      115,
      95,
      126,
      93,
      145,
      115,
      140,
      135,
      95
    ];

    this.sessions = {
      series: [
        {
          data: this.sessionsData
        }
      ]
    };
  }

  initTrafficVsSaleChart(theme) {
    this.trafficVsSaleOptions = {
      tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: "#fff",
        extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); color: #444",
        axisPointer: {
          type: "line",
          animation: true
        }
      },
      grid: {
        top: "10%",
        left: "80px",
        right: "30px",
        bottom: "60"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        axisLabel: {
          show: true,
          margin: 20,
          color: "#888"
        },
        axisTick: {
          show: false
        },

        axisLine: {
          show: false,
          lineStyle: {
            show: false
          }
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          margin: 30,
          color: "#888"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        }
      },
      series: [
        {
          name: "Traffic",
          label: { show: false, color: "#0168c1" },
          type: "bar",
          barGap: 0,
          color: tinyColor(theme.baseColor).setAlpha(.4).toString(),
          smooth: true
        },
        {
          name: "Sales",
          label: { show: false, color: "#639" },
          type: "bar",
          color: tinyColor(theme.baseColor).toString(),
          smooth: true
        }
      ]
    };
    
    this.trafficData = [
      1400,
      1350,
      950,
      1150,
      950,
      1260,
      930,
      1450,
      1150,
      1400,
      1350,
      950,
      1150,
      950,
      1260
    ];
    this.saleData = [
      500,
      700,
      350,
      840,
      750,
      800,
      700,
      500,
      700,
      650,
      104,
      750,
      800,
      700,
      500
    ];
    this.trafficVsSale = {
      series: [
        {
          data: this.trafficData
        },
        {
          data: this.saleData
        }
      ]
    };
  }

}
