import React, { useState, useMemo } from 'react';
import { Calculator, Euro, Calendar, Percent, Info, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { MortgageInputs, MortgageResults } from '../types';

export const MortgageCalculator: React.FC = () => {
  // Initial state with real property price (329.000 €) and 20% down payment:
  const [inputs, setInputs] = useState<MortgageInputs>({
    propertyPrice: 329000,
    downPayment: 65800,
    downPaymentPercent: 20,
    loanYears: 30,
    interestRate: 2.9,
  });

  // Calculate whenever inputs change
  const results: MortgageResults = useMemo(() => {
    const price = Math.max(0, inputs.propertyPrice);
    const down = Math.min(price, Math.max(0, inputs.downPayment));
    const loan = Math.max(0, price - down);
    const years = Math.max(1, inputs.loanYears);
    const rate = Math.max(0, inputs.interestRate);

    // Monthly payment calculation (French amortization system)
    const n = years * 12;
    const monthlyRate = rate / 100 / 12;

    let monthly = 0;
    if (loan > 0) {
      if (monthlyRate === 0) {
        monthly = loan / n;
      } else {
        monthly =
          (loan * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
          (Math.pow(1 + monthlyRate, n) - 1);
      }
    }

    const totalPaid = monthly * n;
    const totalInterest = Math.max(0, totalPaid - loan);

    // Specified Andalusian ITP: 7% of property price
    const itpTax = price * 0.07;
    // Specified fixed expenses: 1.993 €
    const fixedCosts = 1993;
    const totalPurchaseCosts = itpTax + fixedCosts;
    const totalCashRequired = down + totalPurchaseCosts;

    return {
      loanAmount: loan,
      monthlyPayment: Math.round(monthly),
      totalInterest: Math.round(totalInterest),
      itpTax: Math.round(itpTax),
      fixedCosts,
      totalPurchaseCosts: Math.round(totalPurchaseCosts),
      totalCashRequired: Math.round(totalCashRequired),
    };
  }, [inputs]);

  // Handlers for inputs
  const handlePriceChange = (val: number) => {
    const validVal = isNaN(val) ? 0 : val;
    // Update down payment preserving percent
    const newDown = Math.round((validVal * inputs.downPaymentPercent) / 100);
    setInputs((prev) => ({
      ...prev,
      propertyPrice: validVal,
      downPayment: newDown,
    }));
  };

  const handleDownPaymentAmountChange = (val: number) => {
    const validVal = isNaN(val) ? 0 : val;
    const percent = inputs.propertyPrice > 0 ? (validVal / inputs.propertyPrice) * 100 : 0;
    setInputs((prev) => ({
      ...prev,
      downPayment: validVal,
      downPaymentPercent: Math.min(100, Math.max(0, Math.round(percent))),
    }));
  };

  const handleDownPaymentPercentChange = (percent: number) => {
    const newAmount = Math.round((inputs.propertyPrice * percent) / 100);
    setInputs((prev) => ({
      ...prev,
      downPayment: newAmount,
      downPaymentPercent: percent,
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section
      id="calculadora"
      className="py-24 md:py-32 bg-[#faf8f5] text-[#292524] border-b border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado centrado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#f3ede2] border border-[#e4dccf] text-[#a85a43] text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>HERRAMIENTA FINANCIERA INTERACTIVA</span>
          </div>

          <h2
            id="mortgage-calculator-title"
            className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#1c1917]"
          >
            Calculadora de Hipoteca y Gastos de Compra
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Simula al instante la cuota mensual estimada y el desglose de gastos de compraventa según la fiscalidad autonómica de Andalucía.
          </p>
        </div>

        {/* Grid a dos columnas: Parámetros editables a la izquierda, Resultados a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Formulario de cálculo */}
          <div
            id="mortgage-inputs-form"
            className="lg:col-span-7 bg-white rounded-xs border border-stone-200/90 shadow-sm p-6 sm:p-8 space-y-7"
          >
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-editorial text-2xl text-[#1c1917] font-normal">
                Parámetros de Financiación
              </h3>
              <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">
                Cálculo instantáneo
              </span>
            </div>

            {/* Campo 1: Precio de la vivienda */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-stone-700">
                <label htmlFor="input-property-price" className="flex items-center gap-1.5">
                  <Euro className="w-3.5 h-3.5 text-[#c26d53]" />
                  <span>Precio de la Vivienda</span>
                </label>
                <span className="text-sm font-bold text-stone-900">
                  {formatCurrency(inputs.propertyPrice)}
                </span>
              </div>
              <div className="relative">
                <input
                  id="input-property-price"
                  type="number"
                  min="50000"
                  max="10000000"
                  step="10000"
                  value={inputs.propertyPrice}
                  onChange={(e) => handlePriceChange(parseFloat(e.target.value))}
                  className="w-full px-4 py-3 rounded-xs border border-stone-300 focus:border-[#c26d53] focus:ring-1 focus:ring-[#c26d53] outline-none text-base font-semibold text-stone-900 bg-[#faf9f7]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm font-medium">
                  EUR
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="3000000"
                step="25000"
                value={inputs.propertyPrice}
                onChange={(e) => handlePriceChange(parseFloat(e.target.value))}
                className="w-full accent-[#c26d53] cursor-pointer"
              />
            </div>

            {/* Campo 2: Entrada Inicial */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-stone-700">
                <label htmlFor="input-down-payment" className="flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5 text-[#c26d53]" />
                  <span>Aportación de Entrada Inicial ({inputs.downPaymentPercent}%)</span>
                </label>
                <span className="text-sm font-bold text-stone-900">
                  {formatCurrency(inputs.downPayment)}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    id="input-down-payment"
                    type="number"
                    min="0"
                    max={inputs.propertyPrice}
                    step="5000"
                    value={inputs.downPayment}
                    onChange={(e) => handleDownPaymentAmountChange(parseFloat(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xs border border-stone-300 focus:border-[#c26d53] focus:ring-1 focus:ring-[#c26d53] outline-none text-sm font-semibold text-stone-900 bg-[#faf9f7]"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 text-xs font-medium">
                    EUR
                  </span>
                </div>
                {/* Botones de porcentaje rápido */}
                <div className="flex gap-1.5">
                  {[10, 20, 30, 40].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => handleDownPaymentPercentChange(pct)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-xs border transition-colors ${
                        inputs.downPaymentPercent === pct
                          ? 'bg-[#c26d53] text-white border-[#c26d53]'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Campo 3 & 4: Plazo en años e Interés */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              {/* Plazo en años */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-stone-700">
                  <label htmlFor="input-loan-years" className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c26d53]" />
                    <span>Plazo de Amortización</span>
                  </label>
                  <span className="text-xs font-bold text-stone-900">{inputs.loanYears} años</span>
                </div>
                <select
                  id="input-loan-years"
                  value={inputs.loanYears}
                  onChange={(e) =>
                    setInputs((prev) => ({ ...prev, loanYears: parseInt(e.target.value) }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xs border border-stone-300 focus:border-[#c26d53] focus:ring-1 focus:ring-[#c26d53] outline-none text-sm font-medium text-stone-900 bg-[#faf9f7]"
                >
                  <option value={15}>15 años (180 cuotas)</option>
                  <option value={20}>20 años (240 cuotas)</option>
                  <option value={25}>25 años (300 cuotas)</option>
                  <option value={30}>30 años (360 cuotas)</option>
                  <option value={35}>35 años (420 cuotas)</option>
                </select>
              </div>

              {/* Interés anual (referencia 2,9%) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-stone-700">
                  <label htmlFor="input-interest-rate" className="flex items-center gap-1.5">
                    <Percent className="w-3.5 h-3.5 text-[#c26d53]" />
                    <span>Tipo de Interés (TIN)</span>
                  </label>
                  <span className="text-xs font-bold text-stone-900">{inputs.interestRate}%</span>
                </div>
                <div className="relative">
                  <input
                    id="input-interest-rate"
                    type="number"
                    min="0.1"
                    max="15"
                    step="0.05"
                    value={inputs.interestRate}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        interestRate: parseFloat(e.target.value) || 0,
                      }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xs border border-stone-300 focus:border-[#c26d53] focus:ring-1 focus:ring-[#c26d53] outline-none text-sm font-semibold text-stone-900 bg-[#faf9f7]"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-xs font-medium">
                    % anual
                  </span>
                </div>
                <p className="text-[11px] text-stone-500">
                  Referencia actual de mercado: tipo fijo 2,90%
                </p>
              </div>
            </div>

            {/* Aviso fiscal */}
            <div className="p-3.5 rounded-xs bg-[#f3ede2]/70 border border-[#e4dccf] flex items-start gap-2.5 text-xs text-stone-600">
              <Info className="w-4 h-4 text-[#c26d53] flex-shrink-0 mt-0.5" />
              <p>
                Cálculo configurado con la fiscalidad autonómica de Andalucía: Impuesto sobre Transmisiones Patrimoniales (ITP) al tipo general del <strong className="text-stone-800">7%</strong> más <strong className="text-stone-800">1.993 €</strong> en concepto de aranceles notariales, registrales y honorarios de gestoría estándar.
              </p>
            </div>

          </div>

          {/* Columna Derecha: Resultados destacados y Desglose de Gastos */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tarjeta de Cuota Mensual Estimada */}
            <div
              id="mortgage-result-card"
              className="bg-white text-stone-900 rounded-xs p-6 sm:p-8 border border-stone-200/90 shadow-sm relative overflow-hidden"
            >
              {/* Sutil halo cálido en esquina */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#c26d53]/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[11px] uppercase font-bold tracking-widest text-[#a85a43] block mb-1">
                Cuota Mensual Estimada
              </span>

              <div className="flex items-baseline gap-2 mb-2">
                <span
                  id="calculated-monthly-payment"
                  className="font-editorial text-4xl sm:text-5xl font-normal text-[#1c1917]"
                >
                  {formatCurrency(results.monthlyPayment)}
                </span>
                <span className="text-stone-500 text-sm">/ mes</span>
              </div>

              <p className="text-xs text-stone-500 mb-6">
                Para un préstamo de {formatCurrency(results.loanAmount)} a {inputs.loanYears} años al {inputs.interestRate}% TIN fijo.
              </p>

              {/* Barra de progreso visual entre entrada y préstamo */}
              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Préstamo ({100 - inputs.downPaymentPercent}%)</span>
                  <span>Entrada ({inputs.downPaymentPercent}%)</span>
                </div>
                <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${100 - inputs.downPaymentPercent}%` }}
                    className="bg-stone-400 h-full"
                  />
                  <div
                    style={{ width: `${inputs.downPaymentPercent}%` }}
                    className="bg-[#c26d53] h-full"
                  />
                </div>
              </div>
            </div>

            {/* Desglose de Gastos de Compra */}
            <div
              id="mortgage-expenses-breakdown"
              className="bg-white rounded-xs border border-stone-200/90 shadow-sm p-6 space-y-4"
            >
              <h4 className="font-editorial text-xl font-normal text-[#1c1917] border-b border-stone-100 pb-2">
                Desglose de Gastos de Compra
              </h4>

              <div className="space-y-3 text-xs">
                {/* ITP Andalucía */}
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <div>
                    <span className="font-semibold text-stone-800 block">
                      ITP de Andalucía (7%)
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Impuesto de Transmisiones Patrimoniales
                    </span>
                  </div>
                  <span id="calculated-itp-tax" className="font-bold text-stone-900 text-sm">
                    {formatCurrency(results.itpTax)}
                  </span>
                </div>

                {/* Gastos fijos */}
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <div>
                    <span className="font-semibold text-stone-800 block">
                      Gastos Fijos Notaría y Registro
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Notaría, Registro de la Propiedad y Gestoría
                    </span>
                  </div>
                  <span id="fixed-expenses-amount" className="font-bold text-stone-900 text-sm">
                    {formatCurrency(results.fixedCosts)}
                  </span>
                </div>

                {/* Total gastos */}
                <div className="flex justify-between items-center py-1.5 font-semibold text-stone-800 bg-[#faf8f5] px-2.5 rounded-xs border border-stone-200">
                  <span>Total Gastos de Compra</span>
                  <span id="total-purchase-costs" className="text-sm font-bold text-[#c26d53]">
                    {formatCurrency(results.totalPurchaseCosts)}
                  </span>
                </div>

                {/* Total aportación necesaria */}
                <div className="pt-2 border-t border-stone-100 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#1c1917] uppercase tracking-wide block">
                      Aportación Inicial Necesaria
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Entrada ({formatCurrency(inputs.downPayment)}) + Gastos
                    </span>
                  </div>
                  <span id="total-cash-required" className="font-editorial text-2xl font-bold text-[#1c1917]">
                    {formatCurrency(results.totalCashRequired)}
                  </span>
                </div>
              </div>

              {/* Botón para solicitar estudio financiero */}
              <a
                href="#contacto"
                className="mt-4 w-full py-3 bg-[#c26d53] hover:bg-[#b05d44] text-white rounded-xs font-semibold text-xs uppercase tracking-wider text-center block transition-colors shadow-xs"
              >
                Solicitar Estudio Financiero Personalizado
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
