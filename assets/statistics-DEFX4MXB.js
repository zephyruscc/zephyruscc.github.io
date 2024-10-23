import{_ as f}from"./ValaxyMain.vue_vue_type_style_index_0_lang-Cbg749p_.js";import{c as b,w as i,f as c,e as g,p as d,o as v,v as l,g as e,h as t,r as o}from"./app-CbiB8eq4.js";import"./YunComment.vue_vue_type_style_index_0_lang-BKrdRa2Y.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DzZlI2e1.js";import"./post-tcfTeibx.js";const E={__name:"statistics",setup(y,{expose:u}){const a=JSON.parse('{"title":"数理统计笔记","description":"","frontmatter":{"title":"数理统计笔记","updated":"2024-10-23","categories":"Valaxy 笔记","tags":["笔记"],"top":1},"headers":[{"level":2,"title":"5. Statistics and estimators","slug":"_5-statistics-and-estimators","link":"#_5-statistics-and-estimators","children":[]},{"level":2,"title":"6. Probabilistic convergence","slug":"_6-probabilistic-convergence","link":"#_6-probabilistic-convergence","children":[{"level":3,"title":"6.1 Two useful inequalities","slug":"_6-1-two-useful-inequalities","link":"#_6-1-two-useful-inequalities","children":[]},{"level":3,"title":"6.2 Types of probabilistic convergence","slug":"_6-2-types-of-probabilistic-convergence","link":"#_6-2-types-of-probabilistic-convergence","children":[]},{"level":3,"title":"6.3 Probabilistic convergence and estimators","slug":"_6-3-probabilistic-convergence-and-estimators","link":"#_6-3-probabilistic-convergence-and-estimators","children":[]}]},{"level":2,"title":"7. The Fisher information","slug":"_7-the-fisher-information","link":"#_7-the-fisher-information","children":[]},{"level":2,"title":"8. Efficiency and the Cramer–Rao bound","slug":"_8-efficiency-and-the-cramer–rao-bound","link":"#_8-efficiency-and-the-cramer–rao-bound","children":[]}],"relativePath":"pages/posts/statistics.md","path":"/home/runner/work/zephyruscc.github.io/zephyruscc.github.io/pages/posts/statistics.md","lastUpdated":1729652727000}'),m=g(),r=a.frontmatter||{};return m.meta.frontmatter=Object.assign(m.meta.frontmatter||{},a.frontmatter||{}),d("pageData",a),d("valaxy:frontmatter",r),globalThis.$frontmatter=r,u({frontmatter:{title:"数理统计笔记",updated:"2024-10-23",categories:"Valaxy 笔记",tags:["笔记"],top:1}}),(s,n)=>{const p=f;return v(),b(p,{frontmatter:c(r)},{"main-content-md":i(()=>[l(` # I. Estimation

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

### 4.2 An interesting example: ML estimation for capture recapture models `),n[0]||(n[0]=e("h2",{id:"_5-statistics-and-estimators",tabindex:"-1"},[t("5. Statistics and estimators "),e("a",{class:"header-anchor",href:"#_5-statistics-and-estimators","aria-label":'Permalink to "5. Statistics and estimators"'},"​")],-1)),n[1]||(n[1]=e("p",null,"需要掌握的几个定义：Statistic、Estimate、Estimator、Distribution of an estimator（符号的定义、对统计量估计参数这一过程的描述、Unbiased estimator、MSE",-1)),n[2]||(n[2]=e("p",null,"Remark 5.1:统计量的分布受参数值（未知 影响",-1)),n[3]||(n[3]=e("p",null,[t("Remark 5.2：如何衡量估计的准确性（置信度"),e("br"),t(" skill：样本量增大时，分布收敛到某个特定的分布（不依赖于未知参数，通过特定分布的性质来推断")],-1)),n[4]||(n[4]=e("p",null,"Remark 5.3：未知参数等同于随机变量，所以相等是指等号在参数任意值处都成立",-1)),n[5]||(n[5]=e("p",null,"Remark 5.4：无偏估计并没有解决计算置信度的问题",-1)),n[6]||(n[6]=e("p",null,"Remark 5.5：偏差-方差分解",-1)),n[7]||(n[7]=e("p",null,"Example 5.1：一个Poisson分布无偏估计的例子，讨论了样本量对置信度的影响，提到了’asymptotic property of the estimator’",-1)),n[8]||(n[8]=e("p",null,"tip：对无偏性、渐进无偏性的讨论参考茆书6.1.1",-1)),n[9]||(n[9]=e("h2",{id:"_6-probabilistic-convergence",tabindex:"-1"},[t("6. Probabilistic convergence "),e("a",{class:"header-anchor",href:"#_6-probabilistic-convergence","aria-label":'Permalink to "6. Probabilistic convergence"'},"​")],-1)),n[10]||(n[10]=e("p",null,"标题下的部分实际在讨论中心极限定理",-1)),n[11]||(n[11]=e("h3",{id:"_6-1-two-useful-inequalities",tabindex:"-1"},[t("6.1 Two useful inequalities "),e("a",{class:"header-anchor",href:"#_6-1-two-useful-inequalities","aria-label":'Permalink to "6.1 Two useful inequalities"'},"​")],-1)),n[12]||(n[12]=e("p",null,"Markov’s inequality、Chebyshev’s inequality",-1)),n[13]||(n[13]=e("h3",{id:"_6-2-types-of-probabilistic-convergence",tabindex:"-1"},[t("6.2 Types of probabilistic convergence "),e("a",{class:"header-anchor",href:"#_6-2-types-of-probabilistic-convergence","aria-label":'Permalink to "6.2 Types of probabilistic convergence"'},"​")],-1)),n[14]||(n[14]=e("p",null,[t("熟练掌握Convergence in quadratic mean、Convergence in probability、Convergence in distribution "),e("br"),t(" 注意前者可以推出后者，三个条件依次减弱"),e("br"),t(" 可以参考王书2.7")],-1)),n[15]||(n[15]=e("p",null,[t("Weak Law of Large Numbers、Central Limit Theorem是两个关于收敛的结论，很重要"),e("br"),t(" 可以参考茆书")],-1)),n[16]||(n[16]=e("p",null,"Example 6.3：依分布收敛的例子",-1)),n[17]||(n[17]=e("p",null,"Continuous Mapping Theorem，Slutsky’s theorem也很重要，记住结论即可",-1)),n[18]||(n[18]=e("p",null,"Slutsky’s theorem的注解中还提到了：均方收敛可以推出概率收敛",-1)),n[19]||(n[19]=e("h3",{id:"_6-3-probabilistic-convergence-and-estimators",tabindex:"-1"},[t("6.3 Probabilistic convergence and estimators "),e("a",{class:"header-anchor",href:"#_6-3-probabilistic-convergence-and-estimators","aria-label":'Permalink to "6.3 Probabilistic convergence and estimators"'},"​")],-1)),n[20]||(n[20]=e("p",null,"Consistency of a sequence of estimators关于一致性的定义",-1)),n[21]||(n[21]=e("p",null,"Remark 6.1：注意一致性是一个存在于序列上的概念",-1)),n[22]||(n[22]=e("p",null,"（重要）Example 6.5：综合运用本节知识，一步步推导出了计算estimator置信度的方法",-1)),n[23]||(n[23]=e("h2",{id:"_7-the-fisher-information",tabindex:"-1"},[t("7. The Fisher information "),e("a",{class:"header-anchor",href:"#_7-the-fisher-information","aria-label":'Permalink to "7. The Fisher information"'},"​")],-1)),n[24]||(n[24]=e("p",null,"本节讨论的是‘models that are sufficiently regular’方差下界、渐进正态性",-1)),n[25]||(n[25]=e("p",null,"需要掌握的定义有Fisher information regularity conditions、The score function、Fisher information，以及对The score function、Fisher information的直观解释",-1)),n[26]||(n[26]=e("p",null,"几个例子是关于验证FIRC、计算The score function、Fisher information的，也是作业里的题型",-1)),n[27]||(n[27]=e("p",null,"渐进正态性可参考韦书96页",-1)),n[28]||(n[28]=e("h2",{id:"_8-efficiency-and-the-cramer–rao-bound",tabindex:"-1"},[t("8. Efficiency and the Cramer–Rao bound "),e("a",{class:"header-anchor",href:"#_8-efficiency-and-the-cramer–rao-bound","aria-label":'Permalink to "8. Efficiency and the Cramer–Rao bound"'},"​")],-1)),n[29]||(n[29]=e("p",null,"需要掌握的定义：Efficient estimator（有效估计、Cauchy–Schwarz inequality for expectations（证明中要用到",-1)),n[30]||(n[30]=e("p",null,"最重要的内容是Cramer–Rao bound定义和证明",-1)),n[31]||(n[31]=e("p",null,"两个例子讨论了有效估计问题",-1)),n[32]||(n[32]=e("p",null,"7、8节内容可参考王书2.6、韦书3.5，有详细的证明",-1)),l(` ## 9. Asymptotic distribution of the MLE

## 10. Confidence sets around the ML estimator

## 11. Asymptotic approximations of CIs

## 12. Estimating the information for ML estimators

## 13. Transformations and confidence intervals

## 14. Likelihood ratio confidence sets: Wilks’ approach

## 15. Transformation invariant confidence sets `),l(` ---

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

## 26. Bayesian hypothesis testing `)]),"main-header":i(()=>[o(s.$slots,"main-header")]),"main-header-after":i(()=>[o(s.$slots,"main-header-after")]),"main-nav":i(()=>[o(s.$slots,"main-nav")]),"main-content":i(()=>[o(s.$slots,"main-content")]),"main-content-after":i(()=>[o(s.$slots,"main-content-after")]),"main-nav-before":i(()=>[o(s.$slots,"main-nav-before")]),"main-nav-after":i(()=>[o(s.$slots,"main-nav-after")]),comment:i(()=>[o(s.$slots,"comment")]),footer:i(()=>[o(s.$slots,"footer")]),aside:i(()=>[o(s.$slots,"aside")]),"aside-custom":i(()=>[o(s.$slots,"aside-custom")]),default:i(()=>[o(s.$slots,"default")]),_:3},8,["frontmatter"])}}};export{E as default};
