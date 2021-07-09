import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '42662488'

const mattioli: ParsedStravaProfile = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Lucas Mattioli',
  picture: 'https://graph.facebook.com/2249678508452042/picture?height=256&width=256',
  username: 'mtokarnia',
}

export const mattioliActivitiesV3: any = [
  {
    athleteId,
    distance: 2400.0,
    elevation: {
      gain: 14.0,
    },
    id: '5590929430',
    name: 'Run 2021.035',
    pace: {
      average: 432,
    },
    polyline:
      'tnenCve_rG?BAD?B?D?B?D?D?HHf@@B?B@B?BDb@DXBLBNDT@LBPDVBLDXFj@Jh@Jf@Jd@V^LLBDFLBHFFNNNJBBDDDBBBJDHDFBHFHDVRNHPFLH^TPLTN^Rb@P^XTH\\Rb@K\\S\\WX]V]NMFCRFLRLR@@@@@@@@?B@BDFRb@Rb@DF@BBD@B@H?L?B?F?FC@???A???@A?{@f@A?MECAWQICE?CAE?CAEAIAICE?]I_@OECCCCACECCKMQKCAGCQG[QQKQKQICAECGCGEKGa@UQIWOUMWIa@SMI_@Ya@WW[IKOUQe@EKKYSe@Ii@Gg@AEEYEWC[GYIk@Ii@AWCi@Cc@@e@Li@Pc@FETe@Vc@LUTe@Pc@Rc@Re@Va@HSTe@Ra@Te@HQLWX]LSPSHMN]HUBMHM@IFMHOVc@BEBCDI??DGBCBEHEFIBC@GBE@Q@EDK@Y?E?QAEAKAEAEAEEKCEAEU_@W[[_@CCKOOY[[Y[W]Y]]][U][Y[SMCBEZ',
    startDate: '2021-07-07T00:05:00Z',
    startPosition: {
      lat: -23.462352,
      lng: -45.057076,
    },
    time: {
      elapsed: 1039,
    },
    type: 'Run',
  },
  {
    athleteId,
    distance: 5050,
    elevation: {
      gain: 32.0,
    },
    id: '5594598463',
    name: 'Run 2021.036',
    pace: {
      average: 357,
    },
    polyline:
      'jtenCpz}qGBBVZJJ?@@@HHFFDFB@@BFF@BHJFFBBHFB@PJBBLPBBBBBD@BLPDFBBDH@BTRLLBDBBDJRTPXBBRXB@@BDD@BDFPd@Db@?h@Kh@Y^]XC@EBCBILS`@KZQd@Q`@EJW\\[`@Q\\Ud@ININEJGNEHGLEHMZKVOVUb@KNIPOVGJEHMXKNINKRS^KRQ`@Gd@Cf@Bh@Hd@DVFb@Hf@BNJd@Hj@Jf@Hf@Ld@Hd@Rb@R`@FRXT`@TNHB@`@Vb@P`@P\\V^VZZXTFDb@R`@N^Pb@KZ_@V]ZWLQ`@Wd@A\\TZZZZV^V\\T^V`@V\\X^XZX\\XZX\\Z\\ZZZ\\Z^PPTVXXXZZ\\X^V\\X\\V^XZDBHLBBZZVX`@VNNJJXTTR\\V^X^V\\V\\VX\\`@Xb@RZZ^X\\TJDBG?ACGQSECIEKIUKAAEACCQMCCIGGGKKIGGEGGCCECCCCAUSCCGECAIECCGEEACCCAYMKEc@UCCc@YGGUSCCCC]Y]YIKY[]WY[[][[QSKKOQCCSSY[][]Y[[Y]UY[[OOMOOO[a@SYQU[YY][]Y_@W]Wa@Wa@Ua@W]_@[MA]XYZMH[ZUT[Xe@D]Y_@SYSWK]UUO_@Sc@Uc@M_@U]YOK_@[YYWc@Qc@Qc@Qe@E[Gi@AGKi@Gg@Ig@Cg@Ig@Ag@Gk@?i@Fg@Ng@NW@GPc@@ETe@Ta@NUXa@Te@Ng@Te@T_@Ta@Ta@Ra@Ta@V]V[Rc@Pc@Ne@Pa@T_@Z_@JONe@Fi@Ai@Oc@KOY[KOCEKQUY][[_@GICC]YKIGKUSOUW[KICCCAY[][AA',
    startDate: '2021-07-08T12:23:00Z',
    startPosition: {
      lat: -23.46326,
      lng: -45.050173,
    },
    time: {
      elapsed: 1803,
    },
    type: 'Run',
  },
  {
    athleteId,
    distance: 2680,
    elevation: {
      gain: 13.0,
    },
    id: '5600318704',
    name: 'Run 2021.037',
    pace: {
      average: 527,
    },
    polyline:
      'ftenClz}qG@?@@X^NRB@@BDDBB\\ZFFBH??DFFFBBFFHFJH@BBB@BBBBBFBB@BBDDBBDDHHHHVZV`@X^X\\Nd@Fh@B\\?h@Kh@IP[\\W`@U`@K`@Kf@W`@W^W^U^Qd@U`@U`@S`@W`@Ub@KZS`@U^U^U^Wb@Sb@Qb@Kh@Ef@@j@Bf@Hf@Fh@Hf@@DLf@Db@DZJf@BZJf@Pd@V^Vb@\\X\\X^RJHNFLFVN`@N\\T^R`@T^X`@Vd@Pd@A\\W^YV[DCFCHG\\UNM\\TR\\Nf@Nd@DTF`@??zNhND???`@XVZV^ZX\\VZZ\\TZXXZZXXPXZ\\TB@^T`@PPNVVBK]Sa@O]Y_@Q_@UQIAA[U[[SSYQ_@UOIQQA?AAA?KOIGIEOUYWUM[YCCGIIM?AAA?AAAU]U_@GEIE[Y]W[[KKY[[[QUU_@EIAAACCCACEGW_@MUIOW_@WW',
    startDate: '2021-07-09T11:28:00Z',
    startPosition: {
      lat: -23.463241,
      lng: -45.050149,
    },
    time: {
      elapsed: 1417,
    },
    type: 'Run',
  },
]

export default mattioli
