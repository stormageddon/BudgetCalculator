/*
 * A utility class that contains a map of each state and it's
 * income tax rate. Most states have a tax rate based on the
 * gross income.
 *
 * State tax rate source: http://www.tax-brackets.org/
 */
app.constant('states', {
	AK: {name: 'Alaska', taxRate: 0.000},
        AL: {name: 'Alabama', taxRate: function(grossIncome) {
          if( grossIncome <= 500 ) {
            return 0.0200;
          }
          if( grossIncome > 500 && grossIncome <= 3000 ) {
            return 0.0400;
          }
          return 0.0500;
        }},
        AR: {name: 'Arkansa', taxRate: function(grossIncome) {
	  if( grossIncome <= 4199 ) {
	    return 0.0100;
	  }
	  if( grossIncome > 4199 && grossIncome <= 8299 ) {
	    return 0.0250;
	  }
	  if( grossIncome > 8299 && grossIncome <= 12399) {
	    return 0.0350;
	  }
	  if( grossIncome > 12399 && grossIncome <= 20699) {
	    return 0.0450;
	  }
	  if( grossIncome > 20699 && grossIncome <= 35599) {
	    return 0.0600;
	  }
          return 0.0700;
        }},
        AZ: {name: 'Arizona', taxRate: function(grossIncome) {
	  if( grossIncome <= 10000 ) {
	    return 0.0259;
	  }
	  if( grossIncome > 10000 && grossIncome <= 25000 ) {
	    return 0.0288;
	  }
	  if( grossIncome > 25000 && grossIncome <= 50000 ) {
	    return 0.0360;
	  }
	  if( grossIncome > 50000 && grossIncome <= 150000 ) {
	    return 0.0424;
	  }
          return 0.0454;
        }},
        CA: {name: 'California', taxRate: function(grossIncome) {
	  if( grossIncome <= 7582 ) {
	    return 0.0100;
	  }
	  if( grossIncome > 7582 && grossIncome <= 17967 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 17967 && grossIncome <= 28371 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 28371 && grossIncome <= 39384 ) {
	    return 0.0600;
	  }
	  if( grossIncome > 39384 && grossIncome <= 49774 ) {
	    return 0.0800;
	  }
	  if( grossIncome > 49774 && grossIncome <= 254250 ) {
	    return 0.0930;
	  }
	  if( grossIncome > 254250 && grossIncome <= 305100 ) {
	    return 0.1030;
	  }
	  if( grossIncome > 305100 && grossIncome <= 508500 ) {
	    return 0.1130;
	  }
	  if( grossIncome > 508500 && grossIncome <= 1000000 ) {
	    return 0.1230;
	  }
	  return 0.1330;
        }},
	CO: {name: 'Colorado', taxRate: 0.0463},
        CT: {name: 'Connecticut', taxRate: function(grossIncome) {
	  if( grossIncome <= 10000 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 10000 && grossIncome <= 50000 ) {
	    return 0.0500;
	  }
	  if( grossIncome > 50000 && grossIncome <= 100000 ) {
	    return 0.0550;
	  }
	  if( grossIncome > 100000 && grossIncome <= 200000 ) {
	    return 0.0600;
	  }
	  if( grossIncome > 200000 && grossIncome <= 250000 ) {
	    return 0.0650;
	  }
          return 0.0670;
        }},
        DE: {name: 'Deleware', taxRate: function(grossIncome) {
	  if( grossIncome <= 2000 ) {
	    return 0.0000;
	  }
	  if( grossIncome > 2000 && grossIncome <= 5000 ) {
	    return 0.0220;
	  }
	  if( grossIncome > 5000 && grossIncome <= 10000 ) {
	    return 0.0390;
	  }
	  if( grossIncome > 10000 && grossIncome <= 20000 ) {
	    return 0.0480;
	  }
	  if( grossIncome > 20000 && grossIncome <= 25000 ) {
	    return 0.0520;
	  }
	  if( grossIncome > 25000 && grossIncome <= 60000 ) {
	    return 0.0555;
	  }
          return 0.0660;
        }},
	FL: {name: 'Florida', taxRate: 0.0000},
        GA: {name: 'Georgia', taxRate: function(grossIncome) {
	  if( grossIncome <= 750 ) {
	    return 0.0100;
	  }
	  if( grossIncome > 750 && grossIncome <= 2250 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 2250 && grossIncome <= 3750 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 3750 && grossIncome <= 5250 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 5250 && grossIncome <= 7000 ) {
	    return 0.0500;
	  }
	  if( grossIncome > 7000 ) {
	    return 0.0600;
	  }
        }},
        HI: {name: 'Hawaii', taxRate: function(grossIncome) {
	  if( grossIncome < 2400 ) {
	    return 0.0140;
	  }
	  if( grossIncome > 2400 && grossIncome <= 4800 ) {
	    return 0.0320;
	  }
	  if( grossIncome > 4800 && grossIncome <= 9600 ) {
	    return 0.0550;
	  }
	  if( grossIncome > 9600 && grossIncome <= 14400 ) {
	    return 0.0640;
	  }
	  if( grossIncome > 14400 && grossIncome <= 19200 ) {
	    return 0.0680;
	  }
	  if( grossIncome > 19200 && grossIncome <= 24000 ) {
	    return 0.0720;
	  }
	  if( grossIncome > 24000 && grossIncome <= 36000 ) {
	    return 0.0760;
	  }
	  if( grossIncome > 36000 && grossIncome <= 48000 ) {
	    return 0.0790;
	  }
	  if( grossIncome > 48000 && grossIncome <= 150000 ) {
	    return 0.0825;
	  }
	  if( grossIncome > 150000 && grossIncome <= 175000 ) {
	    return 0.0900;
	  }
	  if( grossIncome > 175000 && grossIncome <= 200000 ) {
	    return 0.1000;
	  }
	  return 0.1100;
        }},
        IA: {name: 'Iowa', taxRate: function(grossIncome){
	  if( grossIncome <= 1515 ) {
	    return 0.0036;
	  }
	  if( grossIncome > 1515 && grossIncome <= 3030 ) {
	    return 0.0072;
	  }
	  if( grossIncome > 3030 && grossIncome <= 6060 ) {
	    return 0.0243;
	  }
	  if( grossIncome > 6060 && grossIncome <= 13635 ) {
	    return 0.0450;
	  }
	  if( grossIncome > 13635 && grossIncome <= 22725 ) {
	    return 0.0612;
	  }
	  if( grossIncome > 22725 && grossIncome <= 30300 ) {
	    return 0.0648;
	  }
	  if( grossIncome > 30300 && grossIncome <= 45450 ) {
	    return 0.0680;
	  }
	  if( grossIncome > 45450 && grossIncome <= 68175 ) {
	    return 0.0792;
	  }
	  return 0.0898;
        }},
        ID: {name: 'Idaho', taxRate: function(grossIncome) {
	  if( grossIncome <= 1408 ) {
	    return 0.0160;
	  }
	  if( grossIncome > 1408 && grossIncome <= 2817 ) {
	    return 0.0360;
	  }
	  if( grossIncome > 2817 && grossIncome <= 4226 ) {
	    return 0.0410;
	  }
	  if( grossIncome > 4226 && grossIncome <= 5635 ) {
	    return 0.0510;
	  }
	  if( grossIncome > 5635 && grossIncome <= 7044 ) {
	    return 0.0610;
	  }
	  if( grossIncome > 7044 && grossIncome <= 10567 ) {
	    return 0.0710;
	  }
          return 0.0740;
        }},
	IL: {name: 'Illinois', taxRate: 0.0500},
	IN: {name: 'Indiana', taxRate: 0.0340},
        KS: {name: 'Kansas', taxRate: function(grossIncome) {
	  if( grossIncome <= 15000 ) {
	    return 0.0270;
	  }
	  return 0.0490;
        }},
        KY: {name: 'Kentucky', taxRate: function(grossIncome) {
	  if( grossIncome <= 3000 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 3000 && grossIncome <= 4000 ) {
	    return 0.0300;
	  }
	  if( grossincome > 4000 && grossIncome <= 5000 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 5000 && grossIncome <= 8000 ) {
	    return 0.0500;
	  }
	  if( grossIncome > 8000 && grossIncome <= 75000 ) {
	    return 0.0580;
	  }
	  return 0.0600
        }},
        LA: {name: 'Louisiana', taxRate: function(grossIncome) {
	  if( grossIncome <= 12500 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 12500 && grossIncome <= 50000 ) {
	    return 0.0400;
	  }
	  return 0.0600;
        }},
	MA: {name: 'Massachusetts', taxRate: 0.0525},
        MD: {name: 'Maryland', taxRate: function(grossIncome) {
	  if( grossIncome <= 1000 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 1000 && grossIncome <= 2000 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 2000 && grossIncome <= 3000 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 3000 && grossIncome <= 100000 ) {
	    return 0.0475;
	  }
	  if( grossIncome > 100000 && grossIncome <= 125000 ) {
	    return 0.0500;
	  }
	  if( grossIncome > 125000 && grossIncome <= 150000 ) {
	    return 0.0525;
	  }
	  if( grossIncome > 150000 && grossIncome <= 250000 ) {
	    return 0.0550;
	  }
	  return 0.0575;
        }},
        ME: {name: 'Maine', taxRate: function(grossIncome) {
	  if( grossIncome <= 5200 ) {
	    return 0.0000;
	  }
	  if( grossIncome > 5200 && grossIncome <= 20900 ) {
	    return 0.0650;
	  }
	  return 0.0795;
        }},
	MI: {name: 'Michigan', taxRate: 0.0425},
        MN: {name: 'Minnesota', taxRate: function(grossIncome) {
	  if( grossIncome <= 24680 ) {
	    return 0.0535;
	  }
	  if( grossIncome > 24680 && grossIncome <= 81080 ) {
	    return 0.0705;
	  }
	  if( grossIncome > 81080 && grossIncome <= 152540 ) {
	    return 0.0785;
	  }
	  return 0.0985;
        }},
        MO: {name: 'Missouri', taxRate: function(grossIncome) {
	  if( grossIncome <= 1000 ) {
	    return 0.0150;
	  }
	  if( grossIncome > 1000 && grossIncome <= 2000 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 2000 && grossIncome <= 3000 ) {
	    return 0.0250;
	  }
	  if( grossIncome > 3000 && grossIncome <= 4000 ) {
	    return 0.030;
	  }
	  if( grossIncome > 4000 && grossIncome <= 5000 ) {
	    return 0.0350;
	  }
	  if( grossIncome > 5000 && grossIncome <= 6000 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 6000 && grossIncome <= 7000 ) {
	    return 0.0450;
	  }
	  if( grossIncome > 7000 && grossIncome <= 8000 ) {
	    return 0.0500;
	  }
	  if( grossIncome > 8000 && grossIncome <= 9000 ) {
	    return 0.0550;
	  }
	  return 0.0600;
        }},
        MS: {name: 'Mississippi', taxRate: function(grossIncome) {
	  if( grossIncome <= 5000 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 5000 && grossIncome >= 10000 ) {
	    return 0.0400;
	  }
	  return 0.0500;
        }},
        MT: {name: 'Montana', taxRate: function(grossIncome) {
	  if( grossIncome <= 2800 ) {
	    return 0.0100;
	  }
	  if( grossIncome > 2800 && grossIncome <= 4900 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 4900 && grossIncome <= 7400 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 7400 && grossIncome <= 10100 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 10100 && grossIncome <= 13000 ) {
	    return 0.0500;
	  }
	  if( grossIncome > 13000 && grossIncome <= 16700 ) {
	    return 0.0600;
	  }
	  return 0.0690;
        }},
	NC: {name: 'North Carolina', taxRate: 0.0575},
	ND: {name: 'North Dakota', taxRate: 0.0122},
        NE: {name: 'Nebraska', taxRate: function(grossIncome) {
	  if( grossIncome <= 3000 ) {
	    return 0.0246;
	  }
	  if( grossIncome > 3000 && grossIncome <= 18000 ) {
	    return 0.0351;
	  }
	  if( grossIncome > 18000 && grossIncome <= 29000 ) {
	    return 0.0501;
	  }
	  return 0.0684;
        }},
	NH: {name: 'New Hampshire', taxRate: 0.0000},
        NJ: {name: 'New Jersey', taxRate: function(grossIncome) {
	  if( grossIncome <= 20000 ) {
	    return 0.0140;
	  }
	  if( grossIncome > 20000 && grossIncome <= 35000 ) {
	    return 0.0175;
	  }
	  if( grossIncome > 35000 && grossIncome <= 40000 ) {
	    return 0.0350;
	  }
	  if( grossIncome > 40000 && grossIncome <= 75000 ) {
	    return 0.0553;
	  }
	  if( grossIncome > 75000 && grossIncome <= 500000 ) {
	    return 0.0637;
	  }
	  return 0.0897;
        }},
        NM: {name: 'New Mexico', taxRate: function(grossIncome) {
	  if( grossIncome <= 5500 ) {
	    return 0.0170;
	  }
	  if( grossIncome > 5500 && grossIncome <= 11000) {
	    return 0.0320;
	  }
	  if( grossIncome > 11000 && grossIncome <= 16000) {
	    return 0.0470;
	  }
	  return 0.0490;
        }},
	NV: {name: 'Nevada', taxRate: 0.0000},
        NY: {name: 'New York', taxRate: function(grossIncome) {
	  if( grossIncome <= 8200 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 8200 && grossIncome <= 11300 ) {
	    return 0.0450;
	  }
	  if( grossIncome > 11300 && grossIncome <= 13350 ) {
	    return 0.0525;
	  }
	  if( grossIncome > 13350 && grossIncome <= 20550 ) {
	    return 0.0590;
	  }
	  if( grossIncome > 20550 && grossIncome <= 77150 ) {
	    return 0.0645;
	  }
	  if( grossIncome > 77150 && grossIncome <= 205850 ) {
	    return 0.0665;
	  }
	  if( grossIncome > 205850 && grossIncome <= 1029250 ) {
	    return 0.0685;
	  }
	  return 0.0820;
        }},
        OH: {name: 'Ohio', taxRate: function(grossIncome) {
	  if( grossIncome <= 5200 ) {
	    return 0.0054;
	  }
	  if( grossIncome > 5200 && grossIncome <= 10400 ) {
	    return 0.0107;
	  }
	  if( grossIncome > 10400 && grossIncome <= 15650 ) {
	    return 0.0215;
	  }
	  if( grossIncome > 15650 && grossIncome <= 20900 ) {
	    return 0.0269;
	  }
	  if( grossIncome > 20900 && grossIncome <= 41700 ) {
	    return 0.0322;
	  }
	  if( grossIncome > 41700 && grossIncome <= 83350 ) {
	    return 0.0376;
	  }
	  if( grossIncome > 83350 && grossIncome <= 104250 ) {
	    return 0.0430;
	  }
	  if( grossIncome > 104250 && grossIncome <= 208500 ) {
	    return 0.0499;
	  }
	  return 0.0539;
        }},
        OK: {name: 'Oklahoma', taxRate: function(grossIncome) {
	  if( grossIncome <= 1000 ) {
	    return 0.0050;
	  }
	  if( grossIncome > 1000 && grossIncome <= 2500 ) {
	    return 0.0100;
	  }
	  if( grossIncome > 2500 && grossIncome <= 3750 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 3750 && grossIncome <= 4900 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 4900 && grossIncome <= 7200 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 7200 && grossIncome <= 8700 ) {
	    return 0.0500;
	  }
	  return 0.0525;
        }},
        OR: {name: 'Oregon', taxRate: function(grossIncome) {
	  if( grossIncome <= 3000 ) {
	    return 0.0500;
	  }
	  if( grossIncome > 3000 && grossIncome <= 8250 ) {
	    return 0.0700;
	  }
	  if( grossIncome > 8250 && grossIncome <= 125000 ) {
	    return 0.0900;
	  }
	  return 0.0990;
        }},
	PA: {name: 'Pennsylvania', taxRate: 0.0307},
        RI: {name: 'Rhode Island', taxRate: function(grossIncome) {
	  if( grossIncome <= 59600 ) {
	    return 0.0375;
	  }
	  if( grossIncome > 59600 && grossIncome <= 135500 ) {
	    return 0.0475;
	  }
	  return 0.0599;
        }},
        SC: {name: 'South Carolina', taxRate: function(grossIncome) {
	  if( grossIncome <= 2880 ) {
	    return 0.0000;
	  }
	  if( grossIncome > 2880 && grossIncome <= 5760 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 5760 && grossIncome <= 8640 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 8640 && grossIncome <= 11520 ) {
	    return 0.0500;
	  }
	  if( grossIncome > 11520 && grossIncome <= 14400 ) {
	    return 0.0600;
	  }
	  return 0.0700;
        }},
	SD: {name: 'South Dakota', taxRate: 0.0000},
	TN: {name: 'Tennessee', taxRate: 0.0000},
	TX: {name: 'Texas', taxRate: 0.0000},
	UT: {name: 'Utah', taxRate: 0.0500},
        VA: {name: 'Virginia', taxRate: function(grossIncome) {
	  if( grossIncome <= 3000 ) {
	    return 0.0200;
	  }
	  if( grossIncome > 3000 && grossIncome <= 5000 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 5000 && grossIncome <= 17000 ) {
	    return 0.0500;
	  }
	  return 0.0570;
        }},
        VT: {name: 'Vermont', taxRate: function(grossIncome) {
	  if( grossIncome <= 36900 ) {
	    return 0.0355;
	  }
	  if( grossIncome > 36900 && grossIncome <= 89350 ) {
	    return 0.0680;
	  }
	  if( grossIncome > 89350 && grossIncome <= 186350 ) {
	    return 0.0780;
	  }
	  if( grossIncome > 186350 && grossIncome <= 405100 ) {
	    return 0.0880;
	  }
	  return 0.0895;
        }},
	WA: {name: 'Washington', taxRate: 0.0000},
        WI: {name: 'Wisconsin', taxRate: function(grossIncome) {
	  if( grossIncome <= 10910 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 10910 && grossIncome <= 21820 ) {
	    return 0.0584;
	  }
	  if( grossIncome > 21820 && grossIncome <= 240190 ) {
	    return 0.0627;
	  }
	  return 0.0765;
        }},
        WV: {name: 'West Virginia', taxRate: function(grossIncome) {
	  if( grossIncome <= 10000 ) {
	    return 0.0300;
	  }
	  if( grossIncome > 10000 && grossIncome <= 25000 ) {
	    return 0.0400;
	  }
	  if( grossIncome > 25000 && grossIncome <= 40000 ) {
	    return 0.0450;
	  }
	  if( grossIncome > 40000 && grossIncome <= 60000 ) {
	    return 0.0600;
	  }
	  return 0.0650;
        }},
	WY: {name: 'Wyoming', taxRate: 0.0000}
});


