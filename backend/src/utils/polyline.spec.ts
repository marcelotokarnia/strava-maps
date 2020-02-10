import polyline from "@mapbox/polyline";

const encodedLines = [
  "{zkrIm`inANPD?BDXGPKLATHNRBRFtAR~AFjAHl@D|ALtATj@HHJBL?`@EZ?NQ\\Y^MZURGJKR]RMXYh@QdAWf@[~@aAFGb@?j@YJKBU@m@FKZ[NSPKTCRJD?`@Wf@Wb@g@HCp@Qh@]z@SRMRE^EHJZnDHbBGPHb@NfBTxBN|DVbCBdA^lBFl@Lz@HbBDl@Lr@Bb@ApCAp@Ez@g@bEMl@g@`B_AvAq@l@    QF]Rs@Nq@CmAVKCK?_@Nw@h@UJIHOZa@xA]~@UfASn@U`@_@~@[d@Sn@s@rAs@dAGN?NVhAB\\Ox@@b@S|A?Tl@jBZpAt@vBJhATfGJn@b@fARp@H^Hx@ARGNSTIFWHe@AGBOTAP@^\\zBMpACjEWlEIrCKl@i@nAk@}@}@yBOWSg@kAgBUk@Mu@[mC?QLIEUAuAS_E?uCKyCA{BH{DDgF`AaEr@uAb@oA~@{AE}AKw@    g@qAU[_@w@[gAYm@]qAEa@FOXg@JGJ@j@o@bAy@NW?Qe@oCCc@SaBEOIIEQGaAe@kC_@{De@cE?KD[H[P]NcAJ_@DGd@Gh@UHI@Ua@}Bg@yBa@uDSo@i@UIICQUkCi@sCKe@]aAa@oBG{@G[CMOIKMQe@IIM@KB]Tg@Nw@^QL]NMPMn@@\\Lb@P~@XT",
  "u}krIq_inA_@y@My@Yu@OqAUsA]mAQc@CS@o@FSHSp@e@n@Wl@]ZCFEBK?OC_@Qw@?m@CSK[]]EMBeAA_@m@qEAg@UoCAaAMs@IkBMoACq@SwAGOYa@IYIyA_@kEMkC]{DEaAScC@yEHkGA_ALsCBiA@mCD{CCuAZcANOH@HDZl@Z`@RFh@\\TDT@ZVJBPMVGLM\\Mz@c@NCPMXERO|@a@^Ut@s@p@KJAJ    Bd@EHEXi@f@a@\\g@b@[HUD_B@uADg@DQLCLD~@l@`@J^TF?JANQ\\UbAyABEZIFG`@o@RAJEl@_@ZENDDIA[Ki@BURQZaARODKVs@LSdAiAz@G`BU^A^GT@PRp@zARXRn@`BlDHt@ZlAFh@^`BX|@HHHEf@i@FAHHp@bBd@v@DRAVMl@i@v@SROXm@tBILOTOLs@NON_@t@KX]h@Un@k@\\c@h@Ud@]ZGNKp@Sj@KJo@    b@W`@UPOX]XWd@UF]b@WPOAIBSf@QVi@j@_@V[b@Uj@YtAEFCCELARBn@`@lBjAzD^vB^hB?LENURkAv@[Ze@Xg@Py@p@QHONMA[HGAWE_@Em@Hg@AMCG@QHq@Cm@M[Jy@?UJIA{@Ae@KI@GFKNIX[QGAcAT[JK?OVMFK@IAIUKAYJI?QKUCGFIZCXDtAHl@@p@LjBCZS^ERAn@Fj@Br@Hn@HzAHh@RfD?j@TnCTlA    NjANb@\\z@TtARr@P`AFnAGfBG`@CFE?"
];
describe("a", () => {
  it("b", () => {
    const decoded = polyline.decode(encodedLines[0]);
    expect(polyline.encode(decoded)).toBe(encodedLines[0].replace(/ /g, "@"));
  });
});
