// pages/user_protocol/user_protocol.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textList:[{
      text:'【首部及导言】',
      content0:'欢迎您使用新华帮帮的服务！',
      content1: '为使用新华帮帮的服务，您应当阅读并遵守《新华帮帮服务协议》（以下简称“本协议”）和《新华帮帮隐私政策》。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制新华帮帮责任的条款、对用户权利进行限制的条款、约定争议解决方式和司法管辖的条款（如第十八条相关约定）等，以及开通或使用某项服务的单独协议或规则。限制、免责条款或者其他涉及您重大权益的条款可能以加粗、加下划线等形式提示您重点注意。',
      content2: '除非您已充分阅读、完全理解并接受本协议所有条款，否则您无权使用新华帮帮服务。您点击“同意”或“下一步”，或您使用新华帮帮服务，或者以其他任何明示或者默示方式表示接受本协议的，均视为您已阅读并同意签署本协议。本协议即在您与新华帮帮之间产生法律效力，成为对双方均具有约束力的法律文件。',
      content3: '如果您因年龄、智力等因素而不具有完全民事行为能力，请在法定监护人（以下简称"监护人"）的陪同下阅读和判断是否同意本协议，并特别注意未成年人使用条款。',
      content4: '如果您是中国大陆地区以外的用户，您订立或履行本协议还需要同时遵守您所属和/或所处国家或地区的法律。'
    },
    {
      text: '一、【协议的范围】',
      content0: '1.1 本协议是用户与新华帮帮之间关于其使用新华帮帮的服务所订立的协议。“新华帮帮”是指新华帮帮和/或其相关服务可能存在的运营关联单位。“用户”是指新华帮帮的服务的使用人，在本协议中更多地称为“您”。',
      content1: '1.2 新华帮帮的服务是指新华帮帮向用户提供的，包括但不限于即时通讯、网络媒体、小程序平台运营、互联网增值、互动娱乐、金融支付、广告等产品及服务，具体服务以新华帮帮实际提供的为准（以下简称“本服务”）。',
      content2: '1.3 本协议内容同时包括《新华帮帮隐私政策》，且您在使用新华帮帮某一特定服务时，该服务可能会另有单独的协议、相关业务规则等（以下统称为“单独协议”）。上述内容一经正式发布，即为本协议不可分割的组成部分，您同样应当遵守。您对前述任何单独协议的接受，即视为您对本协议全部的接受。您对本协议的接受，即视为您对《新华帮帮隐私政策》的接受。'
    },
    {
      text: '二、【帐号与密码安全】',
      content0: '2.1 您在使用本服务时可能需要注册一个帐号。关于您使用帐号的具体规则，请仔细阅读并遵守相关单独协议。',
      content1: '2.2 新华帮帮特别提醒您应妥善保管您的帐号和密码。当您使用完毕后，应安全退出。因您保管不善可能导致遭受被盗号或密码失窃，责任由您自行承担。',
      content2: '2.3 为增强用户体验和/或技术便利，本服务的帐号可能包括数字、字母或者其组合，以及手机号码、电子信箱等多种形式。在您注册某一形式的帐号时，新华帮帮可能附赠该帐号的另一表现形式。具体的帐号形式、帐号体系及帐号之间的关联关系等，以新华帮帮实际提供的为准。',
      content3: '2.4 您在使用本服务过程中，可能可以为您使用的帐号设置昵称、头像、签名、留言等信息，也可能为您建立或者管理、参与的小程序开放式平台、QQ群、微信群等设置名称、图片、简介等信息。您应当保证这些信息的内容和形式符合法律法规（本协议中的“法律法规”指用户所属/所处地区、国家现行有效的法律、行政法规、司法解释、地方法规、地方规章、部门规章及其他规范性文件以及对于该等法律法规的不时修改和补充，以及相关政策规定等，下同。）、公序良俗、社会公德以及新华帮帮平台规则，且不会侵害任何主体的合法权益。',
    },
    {
      text:'三、【用户个人信息保护】',
      content0:'3.1 保护用户个人信息是新华帮帮的一项基本原则。新华帮帮将按照本协议及《新华帮帮隐私政策》的规定收集、使用、储存和分享您的个人信息。本协议对个人信息保护相关内容未作明确规定的，均应以《新华帮帮隐私政策》的内容为准。',
      content1:'3.2 您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整，则可能无法使用本服务或在使用过程中受到限制。',
      content2:'3.3 一般情况下，您可根据相关产品规则浏览、修改自己提交的信息，但出于安全性和身份识别（如号码申诉服务等）的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。',
      content3:' 3.4 新华帮帮将尽可能运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。',
      content4:'3.5 新华帮帮不会将您的个人信息转移或披露给任何第三方，除非：',
      content5: '（1）相关法律法规或司法机关、行政机关要求。',
      content6: '（2）为完成合并、分立、收购或资产转让而转移。',
      content7: '（3）为提供您要求的服务所必需。',
      content8: '（4）依据《新华帮帮隐私政策》或其他相关协议规则可以转移或披露给任何第三方的情形。',
      content9: '3.6 新华帮帮非常重视对未成年人个人信息的保护。若您不具备完全民事行为能力，在使用新华帮帮的服务前，应事先取得您的监护人的同意。',
    },
    {
      text: '四、【使用本服务的方式】',
      content0: '4.1 本服务仅为您个人非商业性质的使用，除非您与新华帮帮另有约定。',
      content1: '4.2 您依本协议条款所取得的权利不可转让。',
      content2: '4.3 您不得使用任何方式（包括但不限于第三方软件、插件、外挂、系统、设备等）对本服务进行干扰、破坏、修改或施加其他影响。',
      content3: '4.4 您应当通过新华帮帮提供或认可的方式使用本服务，不得通过任何第三方软件、插件、外挂、系统、设备等登录或使用本服务。',
      content4: '4.5 任何人未经新华帮帮授权不得使用任何第三方软件、插件、外挂、系统等查看、获取本服务中所包含的新华帮帮、新华帮帮合作伙伴或用户的任何相关信息、数据等内容，同时，应当严格遵守新华帮帮发布等相关协议规则。',
    },
    {
      text: '五、【按现状提供服务】',
      content0: '您理解并同意：',
      content1: '5.1 本服务是按照现有技术和条件所能达到的现状提供的。新华帮帮会尽最大努力保障服务的连贯性和安全性，但新华帮帮不能随时预见和防范法律、技术以及其他风险，新华帮帮对此类风险在法律允许的范围内免责，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。',
    },
    {
      text: '六、【自备设备】',
      content0: '6.1 您应当理解，您使用本服务需自行准备与相关服务有关的终端设备（如电脑、移动终端和必要的网络接入设备等装置），并承担所需的费用（如电话费、上网费等费用）。',
      content1: '6.2 您理解并同意，您使用本服务时会耗用您的终端设备和带宽等资源。',
    },
    {
      text: '七、【广告】',
      content0: '7.1 您同意新华帮帮可以自行或由第三方通过短信、电子邮件或电子信息等多种方式向您发送、展示广告或其他信息（包括商业与非商业信息），广告或其他信息的具体发送及展示形式、频次及内容等以新华帮帮实际提供为准。',
      content1: '7.2 新华帮帮将依照相关法律法规要求开展广告业务。您同意，对本服务中出现的广告，您应审慎判断其真实性和可靠性，除法律明确规定外，您应对因该广告而实施的行为负责。',
    },
    {
      text: '八、【服务费用】',
      content0: '8.1 新华帮帮的部分服务是以收费方式提供的，如您使用收费服务，请遵守相关的协议。',
      content1: '8.2 新华帮帮可能根据实际需要对收费服务的收费标准、方式进行修改和变更，新华帮帮也可能会对部分免费服务开始收费。前述修改、变更或开始收费前，新华帮帮将在相应服务页面进行通知或公告。如果您不同意上述修改、变更或付费内容，则应停止使用该服务。',
      content2: '8.3 在新华帮帮降低收费服务的收费标准或者将收费服务改为免费服务提供时，新华帮帮保留不对原付费用户提供退费或者费用调整之权利。',
    },
    {
      text: '九、【第三方提供的产品或服务】',
      content0: '您在新华帮帮平台上使用第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。新华帮帮和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。',
    },
    {
      text: '十、【基于软件提供服务】',
      content0: '若新华帮帮依托“小程序”向您提供服务，您还应遵守以下约定：',
      content1: '10.1 您在使用本服务的过程中可能需要下载软件，对于这些软件，新华帮帮给予您一项个人的、不可转让及非排他性的许可。您仅可为使用本服务的目的而使用这些软件。',
      content2: '10.2 为了改善用户体验、保障服务的安全性及产品功能的一致性等目的，新华帮帮可能会对软件进行更新。您应该将相关软件更新到最新版本，否则新华帮帮并不保证软件或服务能正常使用。',
      content3: '10.3 新华帮帮可能为不同的终端设备开发不同的软件版本，您应当根据实际情况选择下载合适的版本进行安装。您可以直接从新华帮帮平台上获取软件，也可以从得到新华帮帮授权的第三方获取。如果您从未经新华帮帮授权的第三方获取软件或与软件名称相同的安装程序，新华帮帮无法保证该软件或服务能够正常使用，并对因此给您造成的损失不予负责。',
      content4: '10.4 除非新华帮帮书面许可，您不得从事下列任一行为：',
      content5: '（1）删除软件及其副本上关于著作权的信息。',
      content6: '（2）对软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现软件的源代码。',
      content7: '（3）对新华帮帮拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等。',
      content8: '（4）对软件或者软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经新华帮帮授权的第三方工具/服务接入软件和相关系统。',
      content9: '（5）通过修改或伪造软件运行中的指令、数据等任何方式，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的。',
      content10: '（6）通过非新华帮帮开发、授权的第三方软件、插件、外挂、系统、设备等任何方式，登录或使用新华帮帮软件及服务，或制作、发布、传播非新华帮帮开发、授权的用于登录或使用新华帮帮软件及服务的第三方软件、插件、外挂、系统、设备等。',
    },
    {
      text: '十一、【知识产权声明】',
      content0: '11.1 新华帮帮在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表、计算机软件等）的知识产权归新华帮帮所有，用户在使用本服务中所产生内容的知识产权归用户或相关权利人所有，除非您与新华帮帮另有约定。',
      content1: '11.2 除另有特别声明外，新华帮帮提供本服务时所依托软件的著作权、专利权及其他知识产权均归新华帮帮所有。',
      content2: '11.3 新华帮帮在本服务中所使用的 “新华帮帮”、“新华邻里帮”等商业标识，其著作权或商标权归东莞光年信息科技有限公司所有。',
      content3: '11.4 上述及其他任何本服务包含的内容的知识产权均受到法律法规保护，未经新华帮帮、用户或相关权利人书面许可，任何人不得以任何形式进行使用或创造相关衍生作品。',
    },
    {
      text: '十二、【用户违法违规行为】',
      content0: '12.1 您在使用本服务时须遵守法律法规，不得制作、复制、发布、传播含有下列内容的信息或从事相关行为，也不得为制作、复制、发布、传播含有下列内容的信息或从事相关行为提供便利：',
      content1: '（1）反对宪法所确定的基本原则的。',
      content2: '（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的。',
      content3: '（3）损害国家荣誉和利益的。',
      content4: '（4）煽动民族仇恨、民族歧视，破坏民族团结的。',
      content5: '（5）破坏国家宗教政策，宣扬邪教和封建迷信的。',
      content6:'（6）散布谣言，扰乱社会秩序，破坏社会稳定的。',
      content7: '（7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的。',
      content8: '（8）侮辱或者诽谤他人，侵害他人合法权益的。',
      content9: '（9）违反法律法规底线、社会主义制度底线、国家利益底线、公民合法权益底线、社会公共秩序底线、道德风尚底线和信息真实性底线的“七条底线”要求的。',
      content10: '（10）相关法律法规或本协议、相关协议、规则等禁止的。',
      content11: '12.2 如果您在使用本服务过程中违反了相关法律法规或本协议约定，相关国家机关或机构可能会对您提起诉讼、罚款或采取其他制裁措施，并要求新华帮帮给予协助。因此给您或者他人造成损害的，您应自行承担全部责任，新华帮帮不承担任何责任。',
      content12: '12.3 如果您违反本协议约定，新华帮帮有权进行独立判断并采取相应措施，包括但不限于通过技术手段删除、屏蔽相关内容或断开链接等。同时，新华帮帮有权视用户的行为性质，采取包括但不限于暂停或终止向您提供服务，限制、中止、冻结或终止您对小程序的使用，追究法律责任等措施。',
      content13: '12.4 您违反本协议约定，导致任何主体损失的，您应当独立承担责任；新华帮帮因此遭受损失的，您也应当一并赔偿。',
    },
    {
      text: '十三、【遵守当地法律监管】',
      content0: '13.1 您在使用本服务过程中应当遵守当地相关的法律法规，并尊重当地的道德和风俗习惯。如果您的行为违反了当地法律法规或道德风俗，您应当为此独立承担责任。',
      content1: '13.2 您应避免因使用本服务而使新华帮帮违反法律法规或卷入政治和公共事件，否则新华帮帮有权暂停或终止对您的服务。',
    },
    {
      text: '十四、【用户发送、传播的内容与投诉处理】',
      content0: '14.1 您通过本服务发送或传播的内容（包括但不限于网页、文字、图片、音频、视频、图表等）均由您自行承担责任。',
      content1: '14.2 您发送或传播的内容应有合法来源，相关内容为您所有或您已获得必要的授权。',
      content2: '14.3 如果您发送或传播的内容违法违规或侵犯他人权利的，新华帮帮有权进行独立判断并采取删除、屏蔽或断开链接等措施。',
      content3: '14.4 如您被他人投诉或您投诉他人，新华帮帮有权将争议中相关方的主体信息、联系方式、投诉相关内容等必要信息提供给相关当事方或相关部门，以便及时解决投诉纠纷，保护各方合法权益。',
      content4: '14.5 您保证对您在投诉处理程序中提供的信息、材料、证据等的真实性、合法性、有效性负责。',
    },
    {
      text: '十五、【不可抗力及其他免责事由】',
      content0: '15.1 您理解并同意，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务受到影响。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，新华帮帮将努力在第一时间与相关单位配合，争取及时进行处理，但是由此给您造成的损失新华帮帮在法律允许的范围内免责。',
      content1: '15.2 在法律允许的范围内，新华帮帮对以下情形导致的服务中断或受阻不承担责任：',
      content2: '（1）受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏。',
      content3: '（2）用户或新华帮帮的电脑软件、系统、硬件和通信线路出现故障。',
      content4: '（3）用户操作不当或用户通过非新华帮帮授权的方式使用本服务。',
      content5: '（4）程序版本过时、设备的老化和/或其兼容性问题。',
      content6:'（5）其他新华帮帮无法控制或合理预见的情形。',
      content7:'15.3 您理解并同意，在使用本服务的过程中，可能会遇到网络信息或其他用户行为带来的风险，新华帮帮不对任何信息的真实性、适用性、合法性承担责任，也不对因侵权行为给您造成的损害负责。这些风险包括但不限于：',
      content8: '（1）来自他人匿名或冒名的含有威胁、诽谤、令人反感或非法内容的信息。',
      content9: '（2）遭受他人误导、欺骗或其他导致或可能导致的任何心理、生理上的伤害以及经济上的损失。',
      content10: '（3）其他因网络信息或用户行为引起的风险。',
      content11: '15.4 新华帮帮依据本协议约定获得处理违法违规内容的权利，该权利不构成新华帮帮的义务或承诺，新华帮帮不能保证及时发现违法行为或进行相应处理。',
      content12: '15.5 在任何情况下，您不应轻信借款、索要密码或其他涉及财产的信息。涉及财产操作的，请一定先核实对方身份，并请经常留意新华帮帮有关防范诈骗犯罪的提示。',      
    },
    {
      text: '十六、【协议的生效与变更】',
      content0: '16.1 您使用本服务即视为您已阅读本协议并接受本协议的约束。',
      content1: '16.2 新华帮帮有权在必要时修改本协议条款。您可以在相关服务页面查阅最新版本的协议条款。',
      content2: '16.3 本协议条款变更后，如果您继续使用新华帮帮提供的软件或服务，即视为您已接受变更后的协议。',
    },
    {
      text: '十七、【服务的变更、中断、终止】',
      content0: '17.1 您理解并同意，新华帮帮基于经营策略的调整，可能会对服务内容进行变更，也可能会中断、中止或终止服务。',
      content1: '17.2 在新华帮帮发生合并、分立、收购、资产转让时，新华帮帮可向第三方转让本服务下相关资产；新华帮帮也可在单方通知您后，将本协议下部分或全部服务及相应的权利义务转交由第三方运营或履行。具体受让主体以新华帮帮通知的为准。',
      content2: '17.3 如发生下列任何一种情形，新华帮帮有权不经通知而中断或终止向您提供服务：',
      content3: '（1）根据法律法规规定您应提交真实信息，而您提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明。',
      content4: '（2）您违反相关法律法规的规定或违反本协议的约定。',
      content5: '（3）按照法律法规规定，司法机关或主管部门的要求。',
      content6: '（4）出于安全的原因或其他必要的情形。',
      content7:'17.4 新华帮帮有权按本协议8.2条的约定进行收费。若您未按时足额付费，新华帮帮有权中断、中止或终止提供服务。',
      content8:'17.5 您有责任自行备份存储在本服务中的数据。如果您的服务被终止，新华帮帮有权从服务器上永久地删除您的数据,法律法规另有规定的除外。服务中止或终止后，新华帮帮没有义务向您提供或返还数据。',
    },
    {
      text: '十八、【管辖与法律适用】',
      content0: '18.1 本协议的成立、生效、履行、解释及纠纷解决等相关事宜，均适用中华人民共和国大陆地区法律（不包括冲突法）。',
      content1: ' 18.2 本协议签订地为中华人民共和国广东省东莞市麻涌镇。',
      content2: '18.3 若您和新华帮帮之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地（即中国广东省东莞市麻涌镇）有管辖权的人民法院管辖。',
      content3: '18.4 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。',
      content4: '18.5 本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。',
      content5: '18.6 若本协议有中文、英文等多个语言版本，相应内容不一致的，均以中文版的内容为准。',
    },
    {
      text:'十九、【未成年人使用条款】',
      content0:'19.1 若用户未满18周岁，则为未成年人，应在监护人监护、指导下阅读本协议和使用本服务。',
      content1:'19.2 未成年人用户涉世未深，容易被网络虚像迷惑，且好奇心强，遇事缺乏随机应变的处理能力，很容易被别有用心的人利用而又缺乏自我保护能力。因此，未成年人用户在使用本服务时应注意以下事项，提高安全意识，加强自我保护：',
      content2:'（1）认清网络世界与现实世界的区别，避免沉迷于网络，影响日常的学习生活。',
      content3:'（2）填写个人资料时，加强个人保护意识，以免不良分子对个人生活造成骚扰。',
      content4:'（3）在监护人或老师的指导下，学习正确使用网络。',
      content5:'（4）避免陌生网友随意会面或参与联谊活动，以免不法分子有机可乘，危及自身安全。',
      content6:'19.3 监护人、学校均应对未成年人使用本服务多做引导。特别是家长应关心子女的成长，注意与子女的沟通，指导子女上网应该注意的安全问题，防患于未然。',
      content7:'19.4 已满18周岁的成年人因任何原因不具备完全民事行为能力的，参照适用本协议之未成年人使用条款之相关约定。',
    },
    {
      text:'二十、【其他】',
      content0:'20.1 如果您对本协议或本服务有意见或建议，可与新华帮帮客户服务部门联系（13750260084），我们会给予您必要的帮助。（正文完）'
    }
    ],


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})