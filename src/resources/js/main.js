/**
 *
 */


window.onload=function(){

   goPage('${page}');

   var page = '${page}';

   page = page.replace(/&/g,"amp;");

   changeurl(page);

}



function goPage(url){



   $('iframe[name="ifr"]').attr("src","<%=request.getContextPath() %>"+url);


   // HTML5지원브라우저에서 사용가능

   if(typeof(history.pushState) == "function"){

      // 현재 주소를 가져온다.

      var renewURL = location.href;

      // 현재 주소 중 .do 뒤 부분이 있다면 날려버린다.

      renewURL = renewURL.substring(0, renewURL.indexOf(".do")+3);

       renewURL += "?page="+url;

      // 페이지를 리로드하지 않고 페이지 주소만 변경할 때 사용

      history.pushState(url, null, renewURL);

   }else{

      location.hash = "#" + url;

   }

}
function changeurl(url){


	   var renewURL = location.href;

	   // 현재 주소 중 .do 뒤 부분이 있다면 날려버린다.

	   renewURL = renewURL.substring(0, renewURL.indexOf(".do")+3);

	   renewURL += "?page="+url

	   // 페이지를 리로드하지 않고 페이지 주소만 변경할 때 사용

	   history.pushState(url, null, renewURL);

	}



function printData(dataArr,target,templateObject,removeClass){



	   var template=Handlebars.compile(templateObject.html());



	   var html = template(dataArr);



	   $(removeClass).remove();

	   target.append(html);

	}

