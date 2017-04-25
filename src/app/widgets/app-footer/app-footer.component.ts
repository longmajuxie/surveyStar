import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  public navIsFixed: boolean = false;
  public dialogConfig:any = {
    title: "",
    content:"",
  };
  public isPrint:boolean=true;
  constructor( @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    //we'll do some stuff here when the window is scrolled
    let number = this.document.body.scrollTop;
    if (number > screen.availHeight) {
      this.navIsFixed = true;
    } else {
      this.navIsFixed = false;
    }
  }
  public goTop() {
    window.scrollTo(0, 0)
  }
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
        <html>
          <head>
            <title>Print tab</title>
            <style>
            //........Customized style.......
            </style>
          </head>
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`
    );
    popupWin.document.close();
  }
  public dialogClick(number: number): void {
    if (number == 1) {
      this.isPrint=false;
      this.dialogConfig.title = "技术支持";
      this.dialogConfig.content = "<ul>"+
      "<li><a href='https://github.com/timjacobi/angular2-education' target='_back'> education </a></li>"+
      "<li><a href='http://angular2.axuer.com/' target='_back'> angular2 </a></li>"+
      "<li><a href='http://www.bootcss.com/' target='_back'> bootstrap </a></li>"+
      "<li><a href='http://www.tuicool.com/articles/z6V3Ubz' target='_back'> angular2 cli </a></li>"+
      "<li><a href='https://valor-software.com/ng2-bootstrap/#/' target='_back'> ng2-bootstrap </a></li>"+
      "<li><a href='http://fontawesome.io/' target='_back'> font-awesome </a></li>"+
      "</ul>";
      this.dialogConfig.content2="网站免责声明";
    } else if (number == 2) {
      this.isPrint=true;
      this.dialogConfig.title = "网站免责声明";
      this.dialogConfig.content = "<p>"+
                        "本网站所收集的部分公开资料来源于互联网，转载的目的在于传递更多信息及用于网络分享， 并不代表本站赞同其观点和对其真实性负责，也不构成任何其他建议。 本站部分作品是由网友自主投稿和发布、编辑整理上传，对此类作品本站仅提供交流平台， 不为其版权负责。如果您发现网站上有侵犯您的知识产权的作品，请与我们取得联系，我们会及时修改或删除。"+
                    "</p>"+
                   "<p>"+
                        "本网站所提供的信息，只供参考之用。本网站不保证信息的准确性、有效性、及时性和完整性。 本网站及其雇员一概毋须以任何方式就任何信息传递或传送的失误、不准确或错误，对用户或任何其他人士负任何直接或间接责任。 在法律允许的范围内，本网站在此声明，不承担用户或任何人士就使用或未能使用本网站所提供的信息或任何链接所引致的任何直接、间接、附带、从属、特殊、惩罚性或惩戒性的损害赔偿。"+
                    "</p>";
    } else if (number == 3) {
      this.isPrint=true;
      this.dialogConfig.title = "联系方式";
      this.dialogConfig.content = "<ul>"+
      "<li>电话：15757115291 </a></li>"+
      "<li>QQ：  1040015203 </a></li>"+
      "<li>邮箱：1040015203@qq.com</li>"+
      "</ul>";
    }
  }
}
