var sessionIsExam = {}

//查询当前是否有将要进行的考试
exports.query = async function(ctx, next){
	try {
    const data = ctx.request.body;

			console.log(data.stuId);

			if(!sessionIsExam[data.stuId]) {
				ctx.body = {
					respCode: 1,
					"paperId": 38,
	        "instId" : 26
				};
				// sessionIsExam[data.stuId] = true;
			}
			else {
				ctx.body = {
					respCode: -1,
					respMsg : "你当前没有要进行的考试或者你已经考试过了"
				};
			}

  }catch(e){
    console.log('[/exam/query] error:', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

//得到试卷的所有题目
exports.getQuestion = async function(ctx, next){
	try {
    const data = ctx.request.body;

      console.log(data.paperId);
      console.log(data.instId);

			let now = new Date();
			let startTime = now;
			let endTime = new Date( now.setHours( now.getHours() + 2 ) );
      ctx.body = {
          "respCode": "1",
          "instId" : 26,
          "startTime" : startTime,
          "endTime" : endTime,
          "questions": [{
            "questionstem": "有3个节点的二叉树可能有（）种",
            "choice": ["5","13","12","15"],
            "questionType": 2
          }, {
            "questionstem": "将一棵二叉树的根节点放入队列，然后将队头元素出队，将出队结点所有子节点入队，递归执行上述操作。以上操作可以实现哪种遍历",
            "choice": ["前序遍历","中序遍历","后序遍历","层序遍历"],
            "questionType": 2
          }, {
            "questionstem": "下面哪一个地址不能用作某个局域网内网IP（）",
            "choice": ["192.168.201.114","172.16.4.25","127.0.0.1","10.0.0.1"],
            "questionType": 2
          }, {
            "questionstem": "计算机的工作是通过CPU一条一条地执行_________来完成",
            "questionType": 1
          }, {
            "questionstem": "操作系统主要有五种功能： __________ 、存储管理、文件管理、设备管理和作业管理。",
            "questionType": 1
          }, {
            "questionstem": "磁盘存储器是由（  ）组成的。",
            "choice": ["磁盘", "通道", "驱动器结构", "控制器","缓冲区"],
            "questionType": 3
          },{
            "questionstem": "数据分段在OSI哪一层( )",
            "choice": ["应用层", "表示层", "传输层", "网络层","数据链路层","会话层"],
            "questionType": 3
          },{
            "questionstem": "若在一棵(分类)平衡树T中先删除某结点N,然后再插入该结点N,得到的新的平衡树T1,则T和T1不一定相同。但是如果在T上先插入结点M,然后再删除M结点,那么得到的新的平衡树T2一定与T完全相同",
            "questionType": 4
          }, {
            "questionstem": "HTTP/1.0 协议采用一次一连接。",
            "questionType": 4
          }, {
            "questionstem": "在操作系统中为什么要引入线程？",
            "questionType": 5
          }, {
            "questionstem": "请简述你对前端组件化、模块化的理解。",
            "questionType": 5
          }, {
            "questionstem": "把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。",
            "questionType": 6
          }, {
            "questionstem": "请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。",
            "questionType": 6
          }],
        };

  }catch(e){
    console.log('[/exam/query] error:', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

//交卷
exports.submit_paper = async function(ctx, next){
	try {
    const data = ctx.request.body;
    console.log("instId为"+data.instId+"的学生已经交卷，他的答案为："+data.answer);
    ctx.body = {
			respCode: "1",
			respMsg: "交卷成功！"
		};

  }catch(e){
    console.log('[/exam/query] error:', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};
