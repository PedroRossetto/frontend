SELECT
F2_EMISSAO as 'Emissão',
CONCAT(RTRIM(F2_DOC),' - ',RTRIM(F2_SERIE)) as [Nota Fiscal],
CASE F2_TPFRETE
WHEN 'C' THEN 'CIF'
WHEN 'F' THEN 'FOB'
WHEN 'T' THEN 'Por conta terceiros'
WHEN 'R' THEN 'Por conta remetente'
WHEN 'D' THEN 'Por conta destinatário'
WHEN 'S' THEN 'Sem frete'
 END as 'Tipo de frete',

F2_FRETE as 'Valor do frete',
F2_VALBRUT as 'Valor da NF',
A1_CGC as 'CNPJ',
RTRIM(A1_NOME) as 'Nome',
A1_MUN as 'Municipio',
A1_EST as 'UF',
A4_NOME as 'Transportadora'
FROM SF2010 SF2 (NOLOCK)
 

LEFT JOIN SA1010 SA1 (NOLOCK) ON F2_CLIENTE = A1_COD AND F2_LOJA = A1_LOJA AND SA1.D_E_L_E_T_ = ''
LEFT JOIN SA4010 SA4 (NOLOCK) ON F2_TRANSP = A4_COD AND SA4.D_E_L_E_T_ = ''
WHERE SF2.D_E_L_E_T_ = '' AND YEAR(F2_EMISSAO) >= YEAR(DATEADD(YEAR, -1, GETDATE()))
