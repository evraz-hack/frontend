import React from "react";
import schema from './mapping_schema'

interface IFullSCheme{
    name: string;
    data: any;
}

export const FullScheme: React.FC<IFullSCheme> = (props) => {
    var scheme = (schema as any)[props.name];

    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1857"
      height="755"
      fill="none"
      viewBox="0 0 1857 755"
    >
      <path fill="#E7E7E7" d="M949.826 357.074h481.044v29H949.826v-29z"></path>
      <path
        fill="url(#paint0_linear_1_3945)"
        fillOpacity="0.35"
        d="M949.826 357.074h481.044v29H949.826v-29z"
      ></path>
      <rect
        width="33.92"
        height="62.92"
        x="994.366"
        y="338.617"
        fill="#F0F0F0"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="994.366"
        y="338.617"
        fill="url(#paint1_linear_1_3945)"
        fillOpacity="0.45"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="994.366"
        y="338.617"
        stroke="#677272"
        strokeWidth="1.08"
        rx="1.62"
      ></rect>
      <rect
        width="59"
        height="100"
        x="1066.83"
        y="309.074"
        fill="#8D9595"
        rx="6.481"
      ></rect>
      <path
        fill="#677272"
        d="M1078.33 314.075l2.79 1.658 2.84 1.592-.04 3.25.04 3.25-2.84 1.591-2.79 1.659-2.8-1.659-2.83-1.591.04-3.25-.04-3.25 2.83-1.592 2.8-1.658z"
      ></path>
      <circle cx="1078.38" cy="320.629" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M1078.33 391.075l2.79 1.658 2.84 1.592-.04 3.25.04 3.25-2.84 1.591-2.79 1.659-2.8-1.659-2.83-1.591.04-3.25-.04-3.25 2.83-1.592 2.8-1.658z"
      ></path>
      <circle cx="1078.38" cy="397.629" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M1114.33 314.075l2.79 1.658 2.84 1.592-.04 3.25.04 3.25-2.84 1.591-2.79 1.659-2.8-1.659-2.83-1.591.04-3.25-.04-3.25 2.83-1.592 2.8-1.658z"
      ></path>
      <circle cx="1114.38" cy="320.629" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M1114.33 391.075l2.79 1.658 2.84 1.592-.04 3.25.04 3.25-2.84 1.591-2.79 1.659-2.8-1.659-2.83-1.591.04-3.25-.04-3.25 2.83-1.592 2.8-1.658z"
      ></path>
      <circle cx="1114.38" cy="397.629" r="2.561" fill="#B3B9B9"></circle>
      <rect
        width="33.92"
        height="62.92"
        x="1080.21"
        y="327.615"
        fill="#F0F0F0"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="1080.21"
        y="327.615"
        fill="url(#paint2_linear_1_3945)"
        fillOpacity="0.45"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="1080.21"
        y="327.615"
        stroke="#677272"
        strokeWidth="1.08"
        rx="1.62"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="1087.75"
        y="336.157"
        fill="#FEF1DB"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="1093.49" y="350.057">
          2
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="1087.75"
        y="336.157"
        stroke="#F9A823"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <rect
        width="59"
        height="100"
        x="1397.83"
        y="309.074"
        fill="#8D9595"
        rx="6.481"
      ></rect>
      <path
        fill="#677272"
        d="M1409.33 314.075l2.79 1.658 2.84 1.592-.04 3.25.04 3.25-2.84 1.591-2.79 1.659-2.8-1.659-2.83-1.591.04-3.25-.04-3.25 2.83-1.592 2.8-1.658z"
      ></path>
      <circle cx="1409.38" cy="320.629" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M1409.33 391.075l2.79 1.658 2.84 1.592-.04 3.25.04 3.25-2.84 1.591-2.79 1.659-2.8-1.659-2.83-1.591.04-3.25-.04-3.25 2.83-1.592 2.8-1.658z"
      ></path>
      <circle cx="1409.38" cy="397.629" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M1445.33 314.075l2.79 1.658 2.84 1.592-.04 3.25.04 3.25-2.84 1.591-2.79 1.659-2.8-1.659-2.83-1.591.04-3.25-.04-3.25 2.83-1.592 2.8-1.658z"
      ></path>
      <circle cx="1445.38" cy="320.629" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M1445.33 391.075l2.79 1.658 2.84 1.592-.04 3.25.04 3.25-2.84 1.591-2.79 1.659-2.8-1.659-2.83-1.591.04-3.25-.04-3.25 2.83-1.592 2.8-1.658z"
      ></path>
      <circle cx="1445.38" cy="397.629" r="2.561" fill="#B3B9B9"></circle>
      <path fill="#E7E7E7" d="M1387.83 346.074h57v29h-57v-29z"></path>
      <path
        fill="url(#paint3_linear_1_3945)"
        fillOpacity="0.35"
        d="M1387.83 346.074h57v29h-57v-29z"
      ></path>
      <rect
        width="33.92"
        height="62.92"
        x="1410.37"
        y="327.615"
        fill="#F0F0F0"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="1410.37"
        y="327.615"
        fill="url(#paint4_linear_1_3945)"
        fillOpacity="0.45"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="1410.37"
        y="327.615"
        stroke="#677272"
        strokeWidth="1.08"
        rx="1.62"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="1417.91"
        y="334.155"
        fill="#FCDBCB"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="1424.74" y="348.054">
          1
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="1417.91"
        y="334.155"
        stroke="#E32112"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <rect
        width="230"
        height="148"
        x="1146.83"
        y="287.077"
        fill="#E8EAEA"
        rx="9"
      ></rect>
      <path
        fill="#fff"
        fillOpacity="0.5"
        d="M0 0H212V22H0z"
        transform="translate(1155.83 296.077)"
      ></path>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="1212.14" y="311.557">
          Главный привод
        </tspan>
      </text>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1173.83" y="343.917">
          , А
        </tspan>
      </text>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1155.83" y="343.917">
          Ток
        </tspan>
      </text>
      <rect
        width="34"
        height="20"
        x="1333.83"
        y="330.077"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1340.12" y="343.917">
            000
        </tspan>
      </text>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1230.87" y="366.917">
          , А
        </tspan>
      </text>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1155.83" y="366.917">
          Ток двигателя
        </tspan>
      </text>
      <rect
        width="34"
        height="20"
        x="1333.83"
        y="353.077"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1340.12" y="366.917">
          000
        </tspan>
      </text>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1266.38" y="389.917">
          , кВт
        </tspan>
      </text>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1155.83" y="389.917">
          Напряжение ротера
        </tspan>
      </text>
      <rect
        width="34"
        height="20"
        x="1333.83"
        y="376.077"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1340.12" y="389.917">
          000
        </tspan>
      </text>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1269.3" y="412.917">
          , кВт
        </tspan>
      </text>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1155.83" y="412.917">
          Напряжение статера
        </tspan>
      </text>
      <rect
        width="34"
        height="20"
        x="1333.83"
        y="399.077"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1340.12" y="412.917">
          000
        </tspan>
      </text>
      <rect
        width="230"
        height="148"
        x="1146.83"
        y="287.077"
        stroke="#8D9595"
        strokeWidth="2"
        rx="9"
      ></rect>
      <path
        fill="#8D9595"
        d="M1135.83 326.077h10v71l-10-10.425v-60.575zM1387.83 396.077h-10v-71l10 10.425v60.575z"
      ></path>
      <path fill="#677272" d="M1303.77 138.137H1312.77V286.078H1303.77z"></path>
      <path
        fill="#fff"
        d="M1306.77 135.097H1309.77V285.62300000000005H1306.77z"
      ></path>
      <rect
        width="230"
        height="163"
        x="899.826"
        y="50.075"
        fill="#E8EAEA"
        rx="9"
      ></rect>
      <path
        fill="#fff"
        fillOpacity="0.5"
        d="M0 0H211V22H0z"
        transform="translate(909.826 59.075)"
      ></path>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="983.785" y="74.555">
          Маслобак
        </tspan>
      </text>
      <rect
        width="198"
        height="57"
        x="915.826"
        y="103.074"
        fill="#EFF2F6"
        rx="1"
      ></rect>
      <path fill="#D9DADA" d="M920.826 109.074H921.826V121.074H920.826z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="933.339" y="118.914">
          0
        </tspan>
      </text>
      <path fill="#D9DADA" d="M951.826 109.074H952.826V121.074H951.826z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="961.98" y="118.914">
          20
        </tspan>
      </text>
      <path fill="#D9DADA" d="M983.826 109.074H984.826V121.074H983.826z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="993.14" y="118.914">
          40
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1014.83 109.074H1015.83V121.074H1014.83z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1024.27" y="118.914">
          60
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1045.83 109.074H1046.83V121.074H1045.83z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1055.24" y="118.914">
          80
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1076.83 109.074H1077.83V121.074H1076.83z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1083.97" y="118.914">
          100
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1107.83 109.074H1108.83V121.074H1107.83z"></path>
      <path
        fill="#F18863"
        d="M0 0H57V31H0z"
        transform="translate(920.826 124.074)"
      ></path>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="932.826" y="137.734">
            {(props.data[scheme['OIL_SYSTEM']['oil_level']] | 0).toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="10"
        letterSpacing="0em"
      >
        <tspan x="932.826" y="150.274">
          УРОВЕНЬ МАСЛА, %
        </tspan>
      </text>
      <rect
        width="198"
        height="57"
        x="915.826"
        y="103.074"
        stroke="#8D9595"
        strokeWidth="2"
        rx="1"
      ></rect>
      <rect
        width="230"
        height="163"
        x="899.826"
        y="50.075"
        stroke="#8D9595"
        strokeWidth="2"
        rx="9"
      ></rect>
      <rect
        width="59"
        height="100"
        x="411.826"
        y="394.074"
        fill="#8D9595"
        rx="6.481"
      ></rect>
      <path
        fill="#677272"
        d="M423.326 399.074l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="423.379" cy="405.628" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M423.326 476.074l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="423.379" cy="482.628" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M459.326 399.074l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="459.379" cy="405.628" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M459.326 476.074l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="459.379" cy="482.628" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#E7E7E7"
        d="M453.469 428.229h124.357v28.881H453.469v-28.881z"
      ></path>
      <path
        fill="url(#paint5_linear_1_3945)"
        fillOpacity="0.35"
        d="M453.469 428.229h124.357v28.881H453.469v-28.881z"
      ></path>
      <rect
        width="33.92"
        height="62.92"
        x="424.366"
        y="412.614"
        fill="#F0F0F0"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="424.366"
        y="412.614"
        fill="url(#paint6_linear_1_3945)"
        fillOpacity="0.45"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="424.366"
        y="412.614"
        stroke="#677272"
        strokeWidth="1.08"
        rx="1.62"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="431.906"
        y="420.157"
        fill="#FFF8EC"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="437.696" y="434.057">
          9
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="431.906"
        y="420.157"
        stroke="#FAB82E"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="431.906"
        y="448.157"
        fill="#EFEFEF"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="437.443" y="462.057">
          8
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="431.906"
        y="448.157"
        stroke="#414F4F"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <path fill="#E7E7E7" d="M540.826 428.074h238.623v29H540.826v-29z"></path>
      <path
        fill="url(#paint7_linear_1_3945)"
        fillOpacity="0.35"
        d="M540.826 428.074h238.623v29H540.826v-29z"
      ></path>
      <rect
        width="59"
        height="100"
        x="600.826"
        y="394.074"
        fill="#8D9595"
        rx="6.481"
      ></rect>
      <path
        fill="#677272"
        d="M612.326 399.074l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="612.379" cy="405.628" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M612.326 476.074l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="612.379" cy="482.628" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M648.326 399.074l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="648.379" cy="405.628" r="2.561" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M648.326 476.074l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="648.379" cy="482.628" r="2.561" fill="#B3B9B9"></circle>
      <rect
        width="33.92"
        height="62.92"
        x="615.989"
        y="412.614"
        fill="#F0F0F0"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="615.989"
        y="412.614"
        fill="url(#paint8_linear_1_3945)"
        fillOpacity="0.45"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="615.989"
        y="412.614"
        stroke="#677272"
        strokeWidth="1.08"
        rx="1.62"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="622.906"
        y="450.157"
        fill="#EFEFEF"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="629.099" y="464.057">
          7
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="622.906"
        y="450.157"
        stroke="#414F4F"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="702.866"
        y="409.117"
        fill="#F0F0F0"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="702.866"
        y="409.117"
        fill="url(#paint9_linear_1_3945)"
        fillOpacity="0.45"
        rx="1.62"
      ></rect>
      <rect
        width="33.92"
        height="62.92"
        x="702.866"
        y="409.117"
        stroke="#677272"
        strokeWidth="1.08"
        rx="1.62"
      ></rect>
      <path
        fill="#677272"
        d="M859.638 132.574a5.5 5.5 0 015.5-5.5h6.5v9h-12v-3.5z"
      ></path>
      <path fill="#fff" d="M862.636 133.075a3 3 0 013-3h6v3h-9z"></path>
      <path fill="#677272" d="M870.638 127.074H898.826V136.074H870.638z"></path>
      <path fill="#fff" d="M870.638 130.074H898.826V133.074H870.638z"></path>
      <path
        fill="#677272"
        d="M0 0H9V191.021H0z"
        transform="matrix(-1 0 0 1 868.638 136.055)"
      ></path>
      <path
        fill="#fff"
        d="M0 0H3V194.642H0z"
        transform="matrix(-1 0 0 1 865.638 132.435)"
      ></path>
      <path
        fill="#677272"
        d="M0 0H388V9H0z"
        transform="matrix(1 0 0 -1 870.826 716.076)"
      ></path>
      <path
        fill="#fff"
        d="M0 0H388V3H0z"
        transform="matrix(1 0 0 -1 870.826 713.076)"
      ></path>
      <path
        fill="#677272"
        d="M859.826 710.576a5.5 5.5 0 005.5 5.5h6.5v-9h-12v3.5z"
      ></path>
      <path fill="#fff" d="M862.826 710.076a3 3 0 003 3h6v-3h-9z"></path>
      <path
        fill="#677272"
        d="M868.826 707.985H877.826V926.895H868.826z"
        transform="rotate(180 868.826 707.985)"
      ></path>
      <path
        fill="#fff"
        d="M865.826 711.576H868.826V935.577H865.826z"
        transform="rotate(180 865.826 711.576)"
      ></path>
      <path
        fill="#677272"
        d="M1268.83 709.903c0 3.41-2.77 6.174-6.18 6.174h-5.82v-10.103h12v3.929z"
      ></path>
      <path
        fill="#fff"
        d="M1265.83 709.342c0 1.86-1.51 3.367-3.37 3.367h-5.63v-3.367h9z"
      ></path>
      <path
        fill="#677272"
        d="M0 0H9V270.665H0z"
        transform="matrix(1 0 0 -1 1259.83 706.742)"
      ></path>
      <path
        fill="#fff"
        d="M0 0H3V275.078H0z"
        transform="matrix(1 0 0 -1 1262.83 711.155)"
      ></path>
      <path fill="#677272" d="M1130.8 127.074H1234.908V136.074H1130.8z"></path>
      <path fill="#fff" d="M1130.8 130.074H1234.908V133.074H1130.8z"></path>
      <rect
        width="60"
        height="29"
        x="1153.33"
        y="115.574"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1159.75" y="134.874">
            {(props.data[scheme['FREEZE']['oil_temperature_before']] | 0).toFixed(0)} °C
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1196.43" y="134.874">
        </tspan>
      </text>
      <path
        fill="#677272"
        d="M1312.81 255.074H1321.81V323.58500000000004H1312.81z"
        transform="rotate(-90 1312.81 255.074)"
      ></path>
      <path
        fill="#fff"
        d="M1306.77 252.073H1309.77V326.63H1306.77z"
        transform="rotate(-90 1306.77 252.073)"
      ></path>
      <path
        fill="#677272"
        stroke="#B3B9B9"
        strokeWidth="3"
        d="M501.326 332.574H568.326V543.5740000000001H501.326z"
      ></path>
      <path fill="#B3B9B9" d="M501.826 338.074H567.541V342.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 354.074H567.541V358.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 370.074H567.541V374.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 386.074H567.541V390.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 402.074H567.541V406.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 418.074H567.541V422.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 434.074H567.541V438.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 450.074H567.541V454.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 466.074H567.541V470.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 482.074H567.541V486.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 498.074H567.541V502.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 514.074H567.541V518.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 530.074H567.541V534.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 546.074H567.541V550.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 562.074H567.541V566.074H501.826z"></path>
      <path fill="#B3B9B9" d="M501.826 578.074H567.541V582.074H501.826z"></path>
      <path
        fill="#323232"
        d="M447.83 156.606l-6.459 7.468h188c-6.09-8.572-19.761-11.582-25.836-12.015-3.614.433-12.364.585-18.454-2.273-7.612-3.572-24.221 0-30.91 0-5.352 0-16.224-4.329-20.992-6.494-4.075-.975-13.471-3.15-18.454-4.06-4.982-.909-17.915 2.328-23.759 4.06-3.614 1.623-12.872 5.195-20.991 6.494-8.12 1.299-18.147 5.088-22.145 6.82z"
      ></path>
      <path
        fill="#5E5C5C"
        d="M453.624 158.904l-6.253 7.17h182c-5.896-8.229-19.131-11.118-25.011-11.534-3.499.416-11.97.561-17.865-2.182-7.369-3.429-23.448 0-29.924 0-5.181 0-15.706-4.157-20.322-6.235-3.945-.935-13.041-3.024-17.865-3.897-4.823-.873-17.344 2.234-23.001 3.897-3.498 1.559-12.461 4.988-20.321 6.235-7.861 1.247-17.568 4.884-21.438 6.546z"
      ></path>
      <path
        fill="#7D7D7D"
        d="M623.118 160.697l6.253 5.377h-182c5.895-6.172 19.13-8.339 25.011-8.65 3.499.311 11.97.42 17.865-1.637 7.369-2.572 23.448 0 29.924 0 5.181 0 15.706-3.117 20.321-4.676 3.946-.702 13.042-2.268 17.865-2.923 4.824-.654 17.344 1.676 23.002 2.923 3.498 1.169 12.461 3.741 20.321 4.676 7.861.935 17.567 3.663 21.438 4.91z"
      ></path>
      <path
        fill="#B3B9B9"
        d="M441.371 269.074l58.455 62h70l59.545-62V164.288h-188v104.786z"
      ></path>
      <path fill="#B3B9B9" d="M495.826 622.074H574.826V714.074H495.826z"></path>
      <path
        fill="#B3B9B9"
        d="M441.826 554.074l53.987 68h79.937l54.076-68v-32h-188v32z"
      ></path>
      <g clipPath="url(#clip0_1_3945)">
        <path
          fill="#F5F5F5"
          d="M0 0H79V12H0z"
          transform="matrix(-1 0 0 1 574.826 670.074)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 613.084)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 613.084)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 617.688)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 617.688)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 622.292)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 622.292)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 626.895)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 626.895)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 631.5)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 631.5)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 682.141)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 682.141)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 636.103)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 636.103)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 640.708)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 640.708)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 645.311)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 645.311)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 649.915)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 649.915)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 654.518)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 654.518)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 659.122)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 659.122)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 663.726)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 663.726)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 668.33)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 668.33)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 672.934)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 672.934)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 640.434 677.538)"
        ></path>
        <path
          stroke="#B3B9B9"
          strokeWidth="2"
          d="M0 -1L103.101 -1"
          transform="matrix(-.81465 .57996 .36805 .9298 556.434 677.538)"
        ></path>
      </g>
      <path
        fill="#4A8F40"
        fillRule="evenodd"
        d="M608.095 671.348v11.542l4.731 9.186h-13.223l4.776-9.274v-1.998h-68.553v-9.456h68.553v-2l-4.776-9.272h13.224l-4.732 9.188v2.084z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#677272"
        d="M535.826 139.074l8.66-15h-17.32l8.66 15zm-1.5-40v26.5h3v-26.5h-3z"
      ></path>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="551.004" y="123.554">
          Из КБЦ
        </tspan>
      </text>
      <path
        fill="#677272"
        d="M538.826 754.845l8.66-15h-17.32l8.66 15zm-1.5-36.769v23.269h3v-23.269h-3z"
      ></path>
      <text
        fill="#2B2B2A"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="554.013" y="740.62">
          В дымовую трубу
        </tspan>
      </text>
      <rect
        width="157"
        height="41"
        x="456.826"
        y="181.074"
        fill="#EFF2F6"
        rx="1"
      ></rect>
      <path
        fill="#B3B9B9"
        d="M0 0H42V31H0z"
        transform="translate(461.826 186.074)"
      ></path>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="473.826" y="199.734">
        {(props.data[scheme['GAUSE_COLLECTOR']['temperature_before']] | 0).toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="10"
        letterSpacing="0em"
      >
        <tspan x="473.826" y="212.274">
          ТЕМПЕРАТУРА ГАЗА, °C{" "}
        </tspan>
      </text>
      <rect
        width="157"
        height="41"
        x="456.826"
        y="181.074"
        stroke="#8D9595"
        strokeWidth="2"
        rx="1"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="521.135" y="242.914">
          , мм.в.ст
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="455.826" y="242.914">
          Разряжение
        </tspan>
      </text>
      <rect
        width="33"
        height="20"
        x="581.826"
        y="229.074"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="588.137" y="242.914">
            {(props.data[scheme['GAUSE_COLLECTOR']['underpressure_before']] | 0).toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="532.701" y="265.914">
          , мг/м
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="455.826" y="265.914">
          Уровень пыли
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="563.404" y="265.914">
          ³
        </tspan>
      </text>
      <rect
        width="33"
        height="20"
        x="581.826"
        y="252.074"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="593.228" y="265.914">
          15
        </tspan>
      </text>
      <text
        fill="#414F4F"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="619.695" y="678.511">
          50%
        </tspan>
      </text>
      <rect
        width="148"
        height="95"
        x="1232.33"
        y="85.574"
        fill="#E8EAEA"
        rx="9"
      ></rect>
      <path
        fill="#fff"
        fillOpacity="0.5"
        d="M0 0H130V22H0z"
        transform="translate(1241.33 94.574)"
      ></path>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="1269.33" y="110.054">
          Охладитель
        </tspan>
      </text>
      <path
        fill="#677272"
        d="M1282.23 131.981a4.937 4.937 0 014.69-3.407c3.35 0 5.73 3.27 4.69 6.457l-6.23 19.177a4.937 4.937 0 01-4.69 3.406c-3.35 0-5.73-3.27-4.69-6.456l6.23-19.177zM1293.34 131.981a4.927 4.927 0 014.69-3.407c3.35 0 5.72 3.27 4.69 6.457l-6.24 19.177a4.928 4.928 0 01-4.69 3.406c-3.35 0-5.73-3.27-4.69-6.456l6.24-19.177zM1304.44 131.981a4.927 4.927 0 014.69-3.407c3.35 0 5.72 3.27 4.69 6.457l-6.24 19.177a4.928 4.928 0 01-4.69 3.406c-3.35 0-5.72-3.27-4.69-6.456l6.24-19.177zM1315.54 131.981a4.927 4.927 0 014.69-3.407c3.35 0 5.73 3.27 4.69 6.457l-6.24 19.177a4.928 4.928 0 01-4.69 3.406c-3.35 0-5.72-3.27-4.69-6.456l6.24-19.177zM1326.64 131.981a4.937 4.937 0 014.69-3.407c3.35 0 5.73 3.27 4.69 6.457l-6.23 19.177a4.937 4.937 0 01-4.69 3.406c-3.35 0-5.73-3.27-4.69-6.456l6.23-19.177zM1270.82 136.945h-10.46l14.64 14.831 2.73-8.248-6.91-6.583zM1337.44 133.018l-2.03 6.522h12.71l2.2-6.596-12.88.074z"
      ></path>
      <rect
        width="148"
        height="95"
        x="1232.33"
        y="85.574"
        stroke="#8D9595"
        strokeWidth="2"
        rx="9"
      ></rect>
      <path
        fill="#677272"
        d="M1269.26 52.362H1278.26V95.43299999999999H1269.26z"
        transform="rotate(180 1269.26 52.362)"
      ></path>
      <path
        fill="#fff"
        d="M1266.26 52.362H1269.26V95.43299999999999H1266.26z"
        transform="rotate(180 1266.26 52.362)"
      ></path>
      <path
        fill="#677272"
        d="M1269.26 37.291H1317.26V46.291H1269.26z"
        transform="rotate(90 1269.26 37.291)"
      ></path>
      <path
        fill="#fff"
        d="M1266.26 37.291H1314.26V40.291H1266.26z"
        transform="rotate(90 1266.26 37.291)"
      ></path>
      <path
        fill="#677272"
        d="M1264.76 93.156l-8.22-14.25h16.45l-8.23 14.25z"
      ></path>
      <path
        fill="#677272"
        fillRule="evenodd"
        d="M1259.43 9.341c-1.19.06-1.87.481-2.09.763-.51.654-1.45.771-2.1.263a1.503 1.503 0 01-.27-2.105c.95-1.219 2.62-1.833 4.31-1.917 1.76-.087 3.77.37 5.68 1.568 3.5 2.201 5.82 1.121 6.58.273.55-.619 1.5-.675 2.11-.124a1.5 1.5 0 01.13 2.117c-1.91 2.152-5.93 3.097-10.42.274-1.39-.875-2.8-1.168-3.93-1.112z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#677272"
        strokeWidth="2.5"
        d="M1272.05 74.99l4.04-6.863 4.03 6.864h-8.07zM1280.12 60.545l-4.03 6.863-4.04-6.863h8.07z"
      ></path>
      <rect
        width="60"
        height="29"
        x="1234.91"
        y="24.362"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1241.33" y="43.662">
        {(props.data[scheme['FREEZE']['water_temperature_before']] | 0).toFixed(0)} °C
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1278.01" y="43.662">
        </tspan>
      </text>
      <path
        fill="#677272"
        d="M1353.33 61.316H1362.33V110.53800000000001H1353.33z"
        transform="rotate(180 1353.33 61.316)"
      ></path>
      <path
        fill="#fff"
        d="M1350.33 61.316H1353.33V110.53800000000001H1350.33z"
        transform="rotate(180 1350.33 61.316)"
      ></path>
      <path
        fill="#677272"
        d="M1344.33 86.01H1398.741V95.01H1344.33z"
        transform="rotate(-90 1344.33 86.01)"
      ></path>
      <path
        fill="#fff"
        d="M1347.33 86.01H1401.741V89.01H1347.33z"
        transform="rotate(-90 1347.33 86.01)"
      ></path>
      <path
        fill="#677272"
        d="M1348.83.375l8.22 14.25h-16.45l8.23-14.25z"
      ></path>
      <path
        stroke="#677272"
        strokeWidth="2.5"
        d="M1356.47 75.093l4.03-6.864 4.04 6.864h-8.07zM1364.54 60.647l-4.04 6.863-4.03-6.863h8.07z"
      ></path>
      <circle
        cx="1349.37"
        cy="85.656"
        r="6.5"
        fill="#fff"
        stroke="#677272"
        strokeWidth="2"
      ></circle>
      <circle
        cx="1349.37"
        cy="85.656"
        r="2.5"
        fill="#677272"
        stroke="#677272"
        strokeWidth="2"
      ></circle>
      <rect
        width="60"
        height="29"
        x="1319.33"
        y="25.6"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1325.75" y="44.9">
        {(props.data[scheme['FREEZE']['water_temperature_after']] | 0).toFixed(0)} °C
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1362.43" y="44.9">
        </tspan>
      </text>
      <rect
        width="171"
        height="170"
        x="778.826"
        y="321.077"
        fill="#8D9595"
        rx="12.961"
      ></rect>
      <path
        fill="#677272"
        d="M791.326 327.077l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="791.386" cy="333.637" r="2.56" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M791.326 399.077l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="791.386" cy="405.637" r="2.56" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M791.326 472.077l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="791.386" cy="478.637" r="2.56" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M864.326 327.077l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="864.386" cy="333.637" r="2.56" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M864.326 472.077l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="864.386" cy="478.637" r="2.56" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M937.326 327.077l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="937.386" cy="333.637" r="2.56" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M937.326 399.077l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="937.386" cy="405.637" r="2.56" fill="#B3B9B9"></circle>
      <path
        fill="#677272"
        d="M937.326 472.077l2.795 1.659 2.834 1.591-.039 3.25.039 3.25-2.834 1.591-2.795 1.659-2.795-1.659-2.834-1.591.039-3.25-.039-3.25 2.834-1.591 2.795-1.659z"
      ></path>
      <circle cx="937.386" cy="478.637" r="2.56" fill="#B3B9B9"></circle>
      <rect
        width="121"
        height="120"
        x="803.826"
        y="346.077"
        fill="#E8EAEA"
        stroke="#677272"
        strokeWidth="2"
        rx="9.801"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="895.752"
        y="356.157"
        fill="#FEF1DB"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="901.672" y="370.057">
          3
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="895.752"
        y="356.157"
        stroke="#F69112"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="895.752"
        y="438.157"
        fill="#FCDBCB"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="901.72" y="452.057">
          5
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="895.752"
        y="438.157"
        stroke="#E32112"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="813.752"
        y="356.157"
        fill="#EFEFEF"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="819.166" y="370.057">
          4
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="813.752"
        y="356.157"
        stroke="#414F4F"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <rect
        width="18.84"
        height="18.84"
        x="813.752"
        y="438.157"
        fill="#EFEFEF"
        rx="3.24"
      ></rect>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="819.412" y="452.057">
          6
        </tspan>
      </text>
      <rect
        width="18.84"
        height="18.84"
        x="813.752"
        y="438.157"
        stroke="#414F4F"
        strokeWidth="2.16"
        rx="3.24"
      ></rect>
      <path
        fill="#fff"
        fillOpacity="0.5"
        d="M0 0H103V22H0z"
        transform="translate(812.826 395.077)"
      ></path>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="14"
        letterSpacing="0em"
      >
        <tspan x="835.984" y="410.557">
          Редуктор
        </tspan>
      </text>
      <path
        fill="#677272"
        d="M827.826 528.62H836.826V591.165H827.826z"
        transform="rotate(180 827.826 528.62)"
      ></path>
      <path
        fill="#fff"
        d="M824.826 531.074H827.826V595.074H824.826z"
        transform="rotate(180 824.826 531.074)"
      ></path>
      <path
        fill="#677272"
        d="M909.826 528.62H918.826V591.165H909.826z"
        transform="rotate(180 909.826 528.62)"
      ></path>
      <path
        fill="#fff"
        d="M906.826 531.074H909.826V595.074H906.826z"
        transform="rotate(180 906.826 531.074)"
      ></path>
      <path
        fill="#677272"
        d="M827.826 345.62H836.826V408.165H827.826z"
        transform="rotate(180 827.826 345.62)"
      ></path>
      <path
        fill="#fff"
        d="M824.826 345.074H827.826V409.074H824.826z"
        transform="rotate(180 824.826 345.074)"
      ></path>
      <path
        fill="#677272"
        d="M627.826 508.077a5.5 5.5 0 005.5 5.5h6.5v-9h-12v3.5z"
      ></path>
      <path fill="#fff" d="M630.828 507.572a3 3 0 003 3h6v-3h-9z"></path>
      <path
        fill="#677272"
        d="M673.328 608.793a5.5 5.5 0 005.5 5.5h6.5v-9h-12v3.5z"
      ></path>
      <path fill="#fff" d="M676.33 608.287a3 3 0 003 3h6v-3h-9z"></path>
      <path
        fill="#677272"
        d="M676.83 504.568a5.5 5.5 0 015.5 5.5v6.5h-9v-12h3.5z"
      ></path>
      <path fill="#fff" d="M676.322 507.572a3 3 0 013 3v6h-3v-9z"></path>
      <path
        fill="#677272"
        d="M909.826 345.62H918.826V408.165H909.826z"
        transform="rotate(180 909.826 345.62)"
      ></path>
      <path
        fill="#fff"
        d="M906.826 345.074H909.826V409.074H906.826z"
        transform="rotate(180 906.826 345.074)"
      ></path>
      <path
        fill="#677272"
        d="M423.826 426.229H432.826V468.252H423.826z"
        transform="rotate(90 423.826 426.229)"
      ></path>
      <path
        fill="#fff"
        d="M423.826 429.229H426.826V470.924H423.826z"
        transform="rotate(90 423.826 429.229)"
      ></path>
      <path
        fill="#677272"
        d="M444.647 508.077a5.5 5.5 0 01-5.5 5.5h-6.5v-9h12v3.5z"
      ></path>
      <path fill="#fff" d="M441.645 507.571a3 3 0 01-3 3h-6v-3h9z"></path>
      <path
        fill="#677272"
        d="M437.989 504.577H446.989V553.778H437.989z"
        transform="rotate(90 437.989 504.577)"
      ></path>
      <path
        fill="#fff"
        d="M438.346 507.577H441.346V557.923H438.346z"
        transform="rotate(90 438.346 507.577)"
      ></path>
      <path
        fill="#677272"
        d="M436.01 476.074H444.64799999999997V507.084H436.01z"
      ></path>
      <path fill="#fff" d="M438.89 476.074H441.769V507.577H438.89z"></path>
      <path
        fill="#677272"
        d="M636.826 507.355H645.826V538.625H636.826z"
        transform="rotate(180 636.826 507.355)"
      ></path>
      <path
        fill="#fff"
        d="M633.826 508.074H636.826V540.071H633.826z"
        transform="rotate(180 633.826 508.074)"
      ></path>
      <path
        fill="#677272"
        d="M682.33 608.286H691.33V700.823H682.33z"
        transform="rotate(180 682.33 608.286)"
      ></path>
      <path
        fill="#fff"
        d="M679.33 609.332H682.33V702.937H679.33z"
        transform="rotate(180 679.33 609.332)"
      ></path>
      <path
        fill="#677272"
        d="M637.714 513.572H646.714V552.171H637.714z"
        transform="rotate(-90 637.714 513.572)"
      ></path>
      <path
        fill="#fff"
        d="M636.826 510.57H639.826V550.066H636.826z"
        transform="rotate(-90 636.826 510.57)"
      ></path>
      <path
        fill="#677272"
        d="M681.769 614.287H690.769V655.096H681.769z"
        transform="rotate(-90 681.769 614.287)"
      ></path>
      <path
        fill="#fff"
        d="M680.83 611.286H683.83V653.044H680.83z"
        transform="rotate(-90 680.83 611.286)"
      ></path>
      <path
        fill="#677272"
        d="M1432.33 521.617H1441.33V653.1569999999999H1432.33z"
        transform="rotate(180 1432.33 521.617)"
      ></path>
      <path
        fill="#fff"
        d="M1429.33 521.62H1432.33V652.012H1429.33z"
        transform="rotate(180 1429.33 521.62)"
      ></path>
      <path
        fill="#677272"
        d="M1102.33 542.074H1111.33V694.073H1102.33z"
        transform="rotate(180 1102.33 542.074)"
      ></path>
      <path
        fill="#fff"
        d="M1099.33 542.077H1102.33V692.75H1099.33z"
        transform="rotate(180 1099.33 542.077)"
      ></path>
      <rect
        width="120"
        height="136"
        x="1036.35"
        y="502.709"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1079.79" y="528.009">
          2 ПС
        </tspan>
      </text>
      <path
        stroke="#8D9595"
        d="M1046.85 513.209H1145.85V533.209H1046.85z"
      ></path>
      <rect
        width="100"
        height="19"
        x="1046.35"
        y="540.709"
        fill="#FAB82E"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1051.35" y="554.369">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1119.35" y="554.369">
            {(props.data[scheme['2']['T']] | 0).toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1051.35" y="577.369">
          В, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1133.35" y="577.369">
            {(props.data[scheme['2']['V']] | 0).toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1051.35" y="600.369">
          Г, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1125.35" y="600.369">
            {(props.data[scheme['2']['H']] | 0).toFixed(1)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1051.35" y="623.369">
          О, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1125.35" y="623.369">
        {props.data[scheme['2']['O']].toFixed(1)}
        </tspan>
      </text>
      <rect
        width="120"
        height="136"
        x="721.326"
        y="580.332"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="765.257" y="605.632">
          7 ПС
        </tspan>
      </text>
      <path
        stroke="#8D9595"
        d="M731.826 590.832H830.826V610.832H731.826z"
      ></path>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="736.326" y="631.992">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="804.326" y="631.992">
            {props.data[scheme['7']['T']].toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="736.326" y="654.992">
          В, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="818.326" y="654.992">
            {props.data[scheme['7']['V']].toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="736.326" y="677.992">
          Г, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="810.326" y="677.992">
        {props.data[scheme['7']['H']].toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="736.326" y="700.992">
          О, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="810.326" y="700.992">
        {props.data[scheme['2']['O']].toFixed(0)}
        </tspan>
      </text>
      <rect
        width="120"
        height="136"
        x="269.51"
        y="488.962"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="312.738" y="514.262">
          8 ПС
        </tspan>
      </text>
      <path stroke="#8D9595" d="M280.01 499.462H379.01V519.462H280.01z"></path>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="284.51" y="540.622">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="352.51" y="540.622">
            {props.data[scheme['8']['T']].toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="284.51" y="563.622">
          В, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="366.51" y="563.622">
        {props.data[scheme['8']['V']].toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="284.51" y="586.622">
          Г, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="358.51" y="586.622">
        {props.data[scheme['8']['H']].toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="284.51" y="609.622">
          О, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="358.51" y="609.622">
            {props.data[scheme['8']['O']].toFixed(0)}
        </tspan>
      </text>
      <rect
        width="120"
        height="136"
        x="1366.33"
        y="503.077"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1410.95" y="528.377">
          1 ПС
        </tspan>
      </text>
      <path
        stroke="#8D9595"
        d="M1376.83 513.577H1475.83V533.577H1376.83z"
      ></path>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1381.33" y="554.737">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1449.33" y="554.737">
          {props.data[scheme['1']['T']].toFixed(1)}
        </tspan>
      </text>
      <rect
        width="100"
        height="19"
        x="1376.33"
        y="564.077"
        fill="#EB5835"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1381.33" y="577.737">
          В, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1463.33" y="577.737">
            {props.data[scheme['1']['V']].toFixed(0)}
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1381.33" y="600.737">
          Г, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1455.33" y="600.737">
            {props.data[scheme['1']['H']].toFixed(1)}
        </tspan>
      </text>
      <rect
        width="100"
        height="19"
        x="1376.33"
        y="610.077"
        fill="#EB5835"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1381.33" y="623.737">
          О, мм/с
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1455.33" y="623.737">
        {props.data[scheme['1']['O']].toFixed(1)}
        </tspan>
      </text>
      <rect
        width="120"
        height="67"
        x="884.826"
        y="502.709"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="928.515" y="528.009">
          5 ПС
        </tspan>
      </text>
      <path
        stroke="#8D9595"
        d="M895.326 513.209H994.326V533.209H895.326z"
      ></path>
      <rect
        width="100"
        height="19"
        x="894.826"
        y="540.709"
        fill="#EB5835"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="899.826" y="554.369">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="967.826" y="554.369">
            {props.data[scheme['5']['T']].toFixed(0)}
        </tspan>
      </text>
      <rect
        width="120"
        height="67"
        x="883.326"
        y="225.074"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="926.964" y="250.374">
          3 ПС
        </tspan>
      </text>
      <path
        stroke="#8D9595"
        d="M893.826 235.574H992.826V255.574H893.826z"
      ></path>
      <rect
        width="100"
        height="19"
        x="893.326"
        y="263.074"
        fill="#FAB82E"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="898.326" y="276.734">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="966.326" y="276.734">
            {props.data[scheme['3']['T']].toFixed(0)}
        </tspan>
      </text>
      <rect
        width="120"
        height="67"
        x="721.826"
        y="502.709"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="765.185" y="528.009">
          6 ПС
        </tspan>
      </text>
      <path
        stroke="#8D9595"
        d="M732.326 513.209H831.326V533.209H732.326z"
      ></path>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="736.826" y="554.369">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="804.826" y="554.369">
            {props.data[scheme['6']['T']].toFixed(0)}
        </tspan>
      </text>
      <rect
        width="120"
        height="67"
        x="720.326"
        y="225.074"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="763.422" y="250.374">
          4 ПС
        </tspan>
      </text>
      <path
        stroke="#8D9595"
        d="M730.826 235.574H829.826V255.574H730.826z"
      ></path>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="735.326" y="276.734">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="803.326" y="276.734">
            {props.data[scheme['4']['T']].toFixed(0)}
        </tspan>
      </text>
      <rect
        width="120"
        height="67"
        x="268"
        y="395.077"
        fill="#414F4F"
        rx="10"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="311.499" y="420.377">
          9 ПС
        </tspan>
      </text>
      <path stroke="#8D9595" d="M278.5 405.577H377.5V425.577H278.5z"></path>
      <rect
        width="100"
        height="19"
        x="278"
        y="433.077"
        fill="#FAB82E"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="283" y="446.737">
          T, °С
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="351" y="446.737">
            {props.data[scheme['9']['T']].toFixed(0)}
        </tspan>
      </text>
      <rect
        width="60"
        height="29"
        x="1277.83"
        y="190.574"
        fill="#414F4F"
        rx="4"
      ></rect>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1284.25" y="209.874">
        {props.data[scheme['FREEZE']['oil_temperature_after']].toFixed(0)} °C
        </tspan>
      </text>
      <text
        fill="#fff"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="15"
        letterSpacing="0em"
      >
        <tspan x="1320.93" y="209.874">
          
        </tspan>
      </text>
      <rect
        width="229"
        height="59"
        x="1381.33"
        y="209.375"
        fill="#EFF2F6"
        rx="1"
      ></rect>
      <path fill="#D9DADA" d="M1386.33 215.375H1387.33V227.375H1386.33z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1398.84" y="225.215">
          0
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1417.33 215.375H1418.33V227.375H1417.33z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1431.8" y="225.215">
          1
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1449.33 215.375H1450.33V227.375H1449.33z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1462.38" y="225.215">
          2
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1480.33 215.375H1481.33V227.375H1480.33z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1493.42" y="225.215">
          3
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1511.33 215.375H1512.33V227.375H1511.33z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1524.01" y="225.215">
          4
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1542.33 215.375H1543.33V227.375H1542.33z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1555.42" y="225.215">
          5
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1573.33 215.375H1574.33V227.375H1573.33z"></path>
      <text
        fill="#595959"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1586.17" y="225.215">
          6
        </tspan>
      </text>
      <path fill="#D9DADA" d="M1604.33 215.375H1605.33V227.375H1604.33z"></path>
      <path
        fill="#EB5835"
        d="M0 0H2V33H0z"
        transform="translate(1386.33 230.375)"
      ></path>
      <path
        fill="#FDC65F"
        d="M0 0H93V33H0z"
        transform="translate(1388.33 230.375)"
      ></path>
      <text
        fill="#000"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="13"
        letterSpacing="0em"
      >
        <tspan x="1400.33" y="244.035">
          2,5
        </tspan>
      </text>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="10"
        letterSpacing="0em"
      >
        <tspan x="1400.33" y="258.215">
          ДАВЛЕНИЕ МАСЛА,
        </tspan>
      </text>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1493.39" y="258.215"></tspan>
      </text>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1497.04" y="258.215">
          кг/см
        </tspan>
      </text>
      <text
        fill="#262626"
        style={{ whiteSpace: "pre" }}
        fontFamily="GT Eesti Pro Text"
        fontSize="12"
        letterSpacing="0em"
      >
        <tspan x="1525.04" y="258.215">
          ²
        </tspan>
      </text>
      <path
        fill="#EB5835"
        d="M0 0H2V33H0z"
        transform="translate(1603.33 230.375)"
      ></path>
      <rect
        width="229"
        height="59"
        x="1381.33"
        y="209.375"
        stroke="#8D9595"
        strokeWidth="2"
        rx="1"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_1_3945"
          x1="1190.35"
          x2="1190.35"
          y1="357.074"
          y2="386.074"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.297" stopOpacity="0"></stop>
          <stop offset="0.693" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_3945"
          x1="1011.33"
          x2="1011.33"
          y1="338.077"
          y2="402.077"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.38" stopOpacity="0"></stop>
          <stop offset="0.625" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_3945"
          x1="1097.17"
          x2="1097.17"
          y1="327.074"
          y2="391.074"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.38" stopOpacity="0"></stop>
          <stop offset="0.625" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_3945"
          x1="1416.33"
          x2="1416.33"
          y1="346.074"
          y2="375.074"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.297" stopOpacity="0"></stop>
          <stop offset="0.693" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_1_3945"
          x1="1427.33"
          x2="1427.33"
          y1="327.074"
          y2="391.074"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.38" stopOpacity="0"></stop>
          <stop offset="0.625" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_1_3945"
          x1="515.647"
          x2="515.647"
          y1="428.229"
          y2="457.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.297" stopOpacity="0"></stop>
          <stop offset="0.693" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_1_3945"
          x1="441.326"
          x2="441.326"
          y1="412.074"
          y2="476.074"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.38" stopOpacity="0"></stop>
          <stop offset="0.625" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_1_3945"
          x1="660.138"
          x2="660.138"
          y1="428.074"
          y2="457.074"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.297" stopOpacity="0"></stop>
          <stop offset="0.693" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_1_3945"
          x1="632.949"
          x2="632.949"
          y1="412.074"
          y2="476.074"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.38" stopOpacity="0"></stop>
          <stop offset="0.625" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_1_3945"
          x1="719.826"
          x2="719.826"
          y1="408.577"
          y2="472.577"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.38" stopOpacity="0"></stop>
          <stop offset="0.625" stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <clipPath id="clip0_1_3945">
          <path
            fill="#fff"
            d="M0 0H79V12H0z"
            transform="matrix(-1 0 0 1 574.826 670.074)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}
