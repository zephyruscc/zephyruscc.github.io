import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-C1hUdoj4.js";import{c as b,w as e,f as g,e as v,p as m,o as y,v as d,g as n,h as t,r as s}from"./app-CAKJEHaI.js";import"./YunComment.vue_vue_type_style_index_0_lang-BXlRt-nu.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-fofCZU2F.js";import"./post-BIfH2_x5.js";const w={__name:"statistics",setup(k,{expose:f}){const r=JSON.parse('{"title":"数理统计笔记","description":"","frontmatter":{"title":"数理统计笔记","updated":"2024-10-23","categories":"Valaxy 笔记","tags":["笔记"],"top":1},"headers":[{"level":2,"title":"5. Statistics and estimators","slug":"_5-statistics-and-estimators","link":"#_5-statistics-and-estimators","children":[]},{"level":2,"title":"6. Probabilistic convergence","slug":"_6-probabilistic-convergence","link":"#_6-probabilistic-convergence","children":[{"level":3,"title":"6.1 Two useful inequalities","slug":"_6-1-two-useful-inequalities","link":"#_6-1-two-useful-inequalities","children":[]},{"level":3,"title":"6.2 Types of probabilistic convergence","slug":"_6-2-types-of-probabilistic-convergence","link":"#_6-2-types-of-probabilistic-convergence","children":[]},{"level":3,"title":"6.3 Probabilistic convergence and estimators","slug":"_6-3-probabilistic-convergence-and-estimators","link":"#_6-3-probabilistic-convergence-and-estimators","children":[]}]},{"level":2,"title":"7. The Fisher information","slug":"_7-the-fisher-information","link":"#_7-the-fisher-information","children":[]},{"level":2,"title":"8. Efficiency and the Cramer–Rao bound","slug":"_8-efficiency-and-the-cramer–rao-bound","link":"#_8-efficiency-and-the-cramer–rao-bound","children":[]},{"level":2,"title":"9. Asymptotic distribution of the MLE","slug":"_9-asymptotic-distribution-of-the-mle","link":"#_9-asymptotic-distribution-of-the-mle","children":[]},{"level":2,"title":"10. Confidence sets around the ML estimator","slug":"_10-confidence-sets-around-the-ml-estimator","link":"#_10-confidence-sets-around-the-ml-estimator","children":[]},{"level":2,"title":"11. Asymptotic approximations of CIs","slug":"_11-asymptotic-approximations-of-cis","link":"#_11-asymptotic-approximations-of-cis","children":[]},{"level":2,"title":"12. Estimating the information for ML estimators","slug":"_12-estimating-the-information-for-ml-estimators","link":"#_12-estimating-the-information-for-ml-estimators","children":[]},{"level":2,"title":"13. Transformations and confidence intervals","slug":"_13-transformations-and-confidence-intervals","link":"#_13-transformations-and-confidence-intervals","children":[]},{"level":2,"title":"14. Likelihood ratio confidence sets: Wilks’ approach","slug":"_14-likelihood-ratio-confidence-sets-wilks-approach","link":"#_14-likelihood-ratio-confidence-sets-wilks-approach","children":[]},{"level":2,"title":"15. Transformation invariant confidence sets","slug":"_15-transformation-invariant-confidence-sets","link":"#_15-transformation-invariant-confidence-sets","children":[]}],"relativePath":"pages/posts/statistics.md","path":"/home/runner/work/zephyruscc.github.io/zephyruscc.github.io/pages/posts/statistics.md","lastUpdated":1729939255000}'),l=v(),a=r.frontmatter||{};return l.meta.frontmatter=Object.assign(l.meta.frontmatter||{},r.frontmatter||{}),m("pageData",r),m("valaxy:frontmatter",a),globalThis.$frontmatter=a,f({frontmatter:{title:"数理统计笔记",updated:"2024-10-23",categories:"Valaxy 笔记",tags:["笔记"],top:1}}),(o,i)=>{const p=u;return y(),b(p,{frontmatter:g(a)},{"main-content-md":e(()=>[d(` # I. Estimation

## 1. Introduction, concepts and notation

### 1.1 A very simple motivating example

### 1.2 Probabilities, models and random variables

### 1.3 Frequentist and subjective interpretations of probabilities

## 2. The (observed) likelihood function

## 3. Maximum likelihood estimates - invariance property

### 3.1 Definition

### 3.2 Invariance property of MLE

## 4. Determining MLEs: the tractable case

### 4.1 Differentiable likelihood in the continuous case - the multivariate scenario

### 4.2 An interesting example: ML estimation for capture recapture models `),i[0]||(i[0]=n("h2",{id:"_5-statistics-and-estimators",tabindex:"-1"},[t("5. Statistics and estimators "),n("a",{class:"header-anchor",href:"#_5-statistics-and-estimators","aria-label":'Permalink to "5. Statistics and estimators"'},"​")],-1)),i[1]||(i[1]=n("p",null,"需要掌握的几个定义：Statistic、Estimate、Estimator、Distribution of an estimator（符号的定义、对统计量估计参数这一过程的描述、Unbiased estimator、MSE",-1)),i[2]||(i[2]=n("p",null,"Remark 5.1:统计量的分布受参数值（未知 影响",-1)),i[3]||(i[3]=n("p",null,[t("Remark 5.2：如何衡量估计的准确性（置信度"),n("br"),t(" skill：样本量增大时，分布收敛到某个特定的分布（不依赖于未知参数，通过特定分布的性质来推断")],-1)),i[4]||(i[4]=n("p",null,"Remark 5.3：未知参数等同于随机变量，所以相等是指等号在参数任意值处都成立",-1)),i[5]||(i[5]=n("p",null,"Remark 5.4：无偏估计并没有解决计算置信度的问题",-1)),i[6]||(i[6]=n("p",null,"Remark 5.5：偏差-方差分解",-1)),i[7]||(i[7]=n("p",null,"Example 5.1：一个Poisson分布无偏估计的例子，讨论了样本量对置信度的影响，提到了’asymptotic property of the estimator’",-1)),i[8]||(i[8]=n("p",null,"tip：对无偏性、渐进无偏性的讨论参考茆书6.1.1",-1)),i[9]||(i[9]=n("h2",{id:"_6-probabilistic-convergence",tabindex:"-1"},[t("6. Probabilistic convergence "),n("a",{class:"header-anchor",href:"#_6-probabilistic-convergence","aria-label":'Permalink to "6. Probabilistic convergence"'},"​")],-1)),i[10]||(i[10]=n("p",null,"标题下的部分实际在讨论中心极限定理",-1)),i[11]||(i[11]=n("h3",{id:"_6-1-two-useful-inequalities",tabindex:"-1"},[t("6.1 Two useful inequalities "),n("a",{class:"header-anchor",href:"#_6-1-two-useful-inequalities","aria-label":'Permalink to "6.1 Two useful inequalities"'},"​")],-1)),i[12]||(i[12]=n("p",null,"Markov’s inequality、Chebyshev’s inequality",-1)),i[13]||(i[13]=n("h3",{id:"_6-2-types-of-probabilistic-convergence",tabindex:"-1"},[t("6.2 Types of probabilistic convergence "),n("a",{class:"header-anchor",href:"#_6-2-types-of-probabilistic-convergence","aria-label":'Permalink to "6.2 Types of probabilistic convergence"'},"​")],-1)),i[14]||(i[14]=n("p",null,[t("熟练掌握Convergence in quadratic mean、Convergence in probability、Convergence in distribution "),n("br"),t(" 注意前者可以推出后者，三个条件依次减弱"),n("br"),t(" 可以参考王书2.7")],-1)),i[15]||(i[15]=n("p",null,[t("Weak Law of Large Numbers、Central Limit Theorem是两个关于收敛的结论，很重要"),n("br"),t(" 可以参考茆书")],-1)),i[16]||(i[16]=n("p",null,"Example 6.3：依分布收敛的例子",-1)),i[17]||(i[17]=n("p",null,"Continuous Mapping Theorem，Slutsky’s theorem也很重要，记住结论即可",-1)),i[18]||(i[18]=n("p",null,"Slutsky’s theorem的注解中还提到了：均方收敛可以推出概率收敛",-1)),i[19]||(i[19]=n("h3",{id:"_6-3-probabilistic-convergence-and-estimators",tabindex:"-1"},[t("6.3 Probabilistic convergence and estimators "),n("a",{class:"header-anchor",href:"#_6-3-probabilistic-convergence-and-estimators","aria-label":'Permalink to "6.3 Probabilistic convergence and estimators"'},"​")],-1)),i[20]||(i[20]=n("p",null,"Consistency of a sequence of estimators关于一致性的定义",-1)),i[21]||(i[21]=n("p",null,"Remark 6.1：注意一致性是一个存在于序列上的概念",-1)),i[22]||(i[22]=n("p",null,"（重要）Example 6.5：综合运用本节知识，一步步推导出了计算estimator置信度的方法",-1)),i[23]||(i[23]=n("p",null,"一致性定义可参考邵书2.5.1",-1)),i[24]||(i[24]=n("h2",{id:"_7-the-fisher-information",tabindex:"-1"},[t("7. The Fisher information "),n("a",{class:"header-anchor",href:"#_7-the-fisher-information","aria-label":'Permalink to "7. The Fisher information"'},"​")],-1)),i[25]||(i[25]=n("p",null,"本节讨论的是‘models that are sufficiently regular’方差下界、渐进正态性",-1)),i[26]||(i[26]=n("p",null,"需要掌握的定义有Fisher information regularity conditions、The score function、Fisher information，以及对The score function、Fisher information的直观解释",-1)),i[27]||(i[27]=n("p",null,"几个例子是关于验证FIRC、计算The score function、Fisher information的，也是作业里的题型",-1)),i[28]||(i[28]=n("p",null,"渐进正态性可参考韦书96页",-1)),i[29]||(i[29]=n("h2",{id:"_8-efficiency-and-the-cramer–rao-bound",tabindex:"-1"},[t("8. Efficiency and the Cramer–Rao bound "),n("a",{class:"header-anchor",href:"#_8-efficiency-and-the-cramer–rao-bound","aria-label":'Permalink to "8. Efficiency and the Cramer–Rao bound"'},"​")],-1)),i[30]||(i[30]=n("p",null,"需要掌握的定义：Efficient estimator（有效估计、Cauchy–Schwarz inequality for expectations（证明中要用到",-1)),i[31]||(i[31]=n("p",null,"最重要的内容是Cramer–Rao bound定义和证明",-1)),i[32]||(i[32]=n("p",null,"两个例子讨论了有效估计问题",-1)),i[33]||(i[33]=n("p",null,"7、8节内容可参考王书2.6、韦书3.5，有详细的证明",-1)),i[34]||(i[34]=n("h2",{id:"_9-asymptotic-distribution-of-the-mle",tabindex:"-1"},[t("9. Asymptotic distribution of the MLE "),n("a",{class:"header-anchor",href:"#_9-asymptotic-distribution-of-the-mle","aria-label":'Permalink to "9. Asymptotic distribution of the MLE"'},"​")],-1)),i[35]||(i[35]=n("p",null,"讨论了ML估计的渐进正态性，注意Theorem 9.1的条件部分",-1)),i[36]||(i[36]=n("p",null,"Corollay 9.1：定义asymptotically efficient",-1)),i[37]||(i[37]=n("p",null,[t("Remark 9.1:进一步阐述了asymptotically efficient，给出了均方误差收敛和依分布收敛两种对asymptotically efficient的描述。"),n("br"),t(" 强调这种性质关注估计参数周围的variability，两种描述只是不同的刻画 根据偏差-方差分解可以推测在渐进无偏的条件下，两种描述等价")],-1)),i[38]||(i[38]=n("p",null,"Definition 9.1：定义了regular statistical models",-1)),i[39]||(i[39]=n("h2",{id:"_10-confidence-sets-around-the-ml-estimator",tabindex:"-1"},[t("10. Confidence sets around the ML estimator "),n("a",{class:"header-anchor",href:"#_10-confidence-sets-around-the-ml-estimator","aria-label":'Permalink to "10. Confidence sets around the ML estimator"'},"​")],-1)),i[40]||(i[40]=n("p",null,[t("有了统计量对参数进行估计后，如果还知道统计量的分布并且分布与待估计参数无关，那么就可以计算置信区间。"),n("br"),t(" 前面的章节给出了ML估计及其渐进分布，本节讨论ML估计的置信区间：")],-1)),i[41]||(i[41]=n("p",null,"Definition 10.1：给出了置信度的定义",-1)),i[42]||(i[42]=n("p",null,"Definition 10.2：1 − α confidence interval，1 − α代表置信度，注意给定置信度下的置信区间并不唯一",-1)),i[43]||(i[43]=n("p",null,"Definition 10.3：观测置信区间（基于样本的",-1)),i[44]||(i[44]=n("h2",{id:"_11-asymptotic-approximations-of-cis",tabindex:"-1"},[t("11. Asymptotic approximations of CIs "),n("a",{class:"header-anchor",href:"#_11-asymptotic-approximations-of-cis","aria-label":'Permalink to "11. Asymptotic approximations of CIs"'},"​")],-1)),i[45]||(i[45]=n("p",null,"Theorem 11.1：该定理即为中心极限定理",-1)),i[46]||(i[46]=n("p",null,"Remark 11.1:强调通过渐进分布得到的置信区间是渐进准确的",-1)),i[47]||(i[47]=n("p",null,"Theorem 11.2：使用slutsky替换了上一定理中的方差部分",-1)),i[48]||(i[48]=n("p",null,"Remark 11.2：样本量越高估计越准确",-1)),i[49]||(i[49]=n("h2",{id:"_12-estimating-the-information-for-ml-estimators",tabindex:"-1"},[t("12. Estimating the information for ML estimators "),n("a",{class:"header-anchor",href:"#_12-estimating-the-information-for-ml-estimators","aria-label":'Permalink to "12. Estimating the information for ML estimators"'},"​")],-1)),i[50]||(i[50]=n("p",null,"这一节将应用ML估计的渐进正态性给出置信区间，在此之前，需要对Lemma 9.1所讲内容进行讨论，确保使用未知参数的估计量替代未知参数计算fisher信息量这一过程的准确性",-1)),i[51]||(i[51]=n("p",null,"Therom 12.1：fisher信息量依概率收敛证明",-1)),i[52]||(i[52]=n("p",null,"Remark 12.1：强调了CMT定理的连续性条件，要求在未知参数的邻域连续",-1)),i[53]||(i[53]=n("p",null,"Therom 12.2：进一步的，使用估计量计算fisher信息量时也会遇到期望难以计算的问题，可以应用WLLN解决期望计算问题。当估计满足一定的条件，可以保障概率收敛性。该定理的条件与Therom 9.1类似，可以互相参考",-1)),i[54]||(i[54]=n("p",null,"Example 12.1（对Example 6.5更精确的讨论）：一个应用渐进正态性估计置信区间的例子",-1)),i[55]||(i[55]=n("p",null,"Remark 12.3：Observed Fisher information的定义",-1)),i[56]||(i[56]=n("h2",{id:"_13-transformations-and-confidence-intervals",tabindex:"-1"},[t("13. Transformations and confidence intervals "),n("a",{class:"header-anchor",href:"#_13-transformations-and-confidence-intervals","aria-label":'Permalink to "13. Transformations and confidence intervals"'},"​")],-1)),i[57]||(i[57]=n("p",null,"开头有一个关于Wald approach的定义，即之前使用渐进分布求置信区间的方法",-1)),i[58]||(i[58]=n("p",null,[t("讨论待估计量为未知参数的函数时，置信区间的变换"),n("br"),t(" 一种方法直接对参数的置信区间进行函数转化，另一种方法是使用逆函数进行重新参数化，两种方法结果都正确，但有所不同（因为置信区间不唯一）")],-1)),i[59]||(i[59]=n("p",null,"Lemma 13.1：重新参数化后，新的fisher信息量的形式（之前在讲C-R下界时也有补充过",-1)),i[60]||(i[60]=n("p",null,"Corollary 13.1：一般化的ML估计的渐进正态性",-1)),i[61]||(i[61]=n("p",null,"Example 13.1：一个估计正态分布均值参数的例子，对比两种方法的差异",-1)),i[62]||(i[62]=n("p",null,"Remark 13.1：讨论了重新参数化方法的几点问题",-1)),i[63]||(i[63]=n("h2",{id:"_14-likelihood-ratio-confidence-sets-wilks-approach",tabindex:"-1"},[t("14. Likelihood ratio confidence sets: Wilks’ approach "),n("a",{class:"header-anchor",href:"#_14-likelihood-ratio-confidence-sets-wilks-approach","aria-label":'Permalink to "14. Likelihood ratio confidence sets: Wilks’ approach"'},"​")],-1)),i[64]||(i[64]=n("p",null,"本节讲了一种完全不同于之前的，新的构建置信区间方法 Theorem 14.1（Wilks定理）：似然比函数在一定条件下依分布收敛于自由度为1的卡方分布，注意定理中的符号theta*含义为估计量，而不是真实值；theta_hat为ML估计值。因此通过这种方法可以选出似然函数最大的置信区间",-1)),i[65]||(i[65]=n("p",null,"Corollary 14.1：具体置信区间的构造",-1)),i[66]||(i[66]=n("p",null,"Remark 14.2：这种方法很难求解析解，但使用计算机容易求出遍历解（迭代解",-1)),i[67]||(i[67]=n("p",null,"Proposition 14.1：一个有意思的小结论，95%置信区间内的参数值，和ML估计参数值差距在2以内",-1)),i[68]||(i[68]=n("p",null,"这一章不太重要，但是wilks定理会在之后的似然比检验中再次出现",-1)),i[69]||(i[69]=n("h2",{id:"_15-transformation-invariant-confidence-sets",tabindex:"-1"},[t("15. Transformation invariant confidence sets "),n("a",{class:"header-anchor",href:"#_15-transformation-invariant-confidence-sets","aria-label":'Permalink to "15. Transformation invariant confidence sets"'},"​")],-1)),i[70]||(i[70]=n("p",null,"在chapter 13提到了重新参数化方法，这种变化应用在wald方法中会有问题，但是应用在wilks方法中时，两种置信区间完全等价，本节证明了这一点",-1)),d(` ---

# II. Testing

## 16. Introduction to hypothesis tests

## 17. Hypothesis testing: significance and power

### 17.1 Significance

### 17.2 Power

### 17.3 Summary and definitions

### 17.4 Testing as a legal trial

## 18. Designing tests: the Neyman-Pearson approach

## 19. Testing: p-values, equivalent test statistics and computing the power function

### 19.1 p-values

### 19.2 Equivalent test statistics and computing the power function

## 20. Uniformly most powerful tests

### 20.1 Why a test can be UMP (not examinable)

## 21. More general hypothesis tests

### 21.1 Generalized likelihood ratio tests

### 21.2 Connection to confidence intervals

## 22. Categorical distributions and Pearson’s chi-squared test

### 22.1 Categorical & Multinomial random variables

### 22.2 GLR test statistic

### 22.3 Pearson’s chi-squared test statistic

## 23. Two goodness-of-fit examples from genetics

### 23.1 Mendel’s peas

### 23.2 Hardy–Weinberg model

---

# III. Bayesian inference

## 24. Bayesian inference

### 24.1 From prior to posterior

## 25. Posterior distributions: Bayes estimates and credible intervals

### 25.1 Bayes estimators

### 25.2 Credible intervals

## 26. Bayesian hypothesis testing `)]),"main-header":e(()=>[s(o.$slots,"main-header")]),"main-header-after":e(()=>[s(o.$slots,"main-header-after")]),"main-nav":e(()=>[s(o.$slots,"main-nav")]),"main-content":e(()=>[s(o.$slots,"main-content")]),"main-content-after":e(()=>[s(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[s(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[s(o.$slots,"main-nav-after")]),comment:e(()=>[s(o.$slots,"comment")]),footer:e(()=>[s(o.$slots,"footer")]),aside:e(()=>[s(o.$slots,"aside")]),"aside-custom":e(()=>[s(o.$slots,"aside-custom")]),default:e(()=>[s(o.$slots,"default")]),_:3},8,["frontmatter"])}}};export{w as default};
