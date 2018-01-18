프로젝트 설명
==

```
2018. 01. 18
만든이 : 박준영
소속 : 조선대학교
크루 : HandlingCode
```
MVC 구조의 프로젝트
--
<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/mvc.png?raw=true" width="300px" height="400px">

>**Note:**
>
>먼저, 이번 웹개발은 **Node.js 프레임워크**를 이용했으며 MVC패턴의 형식을 따랐다. DB는 mongoDB와 mongoose 모듈을 이용하여 구축하였으며 현재는 개발진행 단계 이다. github commit 매일 한것들을 종합하여 올렸기 때문에 그 기능들이 섞여 있다. 위 사진을 보면 models 폴더, views 폴더, routes 폴더가 존재한다. 이 세개의 폴더가 MVC패턴을 가지는 폴더들이며 그 안에 적절한 파일들을 저장해 놓았다.

##

## 첫번째 커밋

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/commit1.png?raw=true">

초기의 커밋에는 사용할 모듈들에 대한 명시를 위해 **package.json**, app 실행을 위한 **app.js**, 간단한 프로젝트 설명에 대한 **README.md** 파일 등을 만들어 놓았다. 그리고 파일에 대한 조건문 등을 테스트해줄 mocha 테스팅모듈에 사용할 **Makefile**을 만들었다.

>**Note:**
> 
>   이때 설치한 모듈의 개수가 약 230개 정도 이며 대표적으로 Express, http, path, mocha 모듈등을 설치 하였다. 설치는 npm instll "module_이름" 방식으로 npm을 이용해 설치 하였다.

--Makefile--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/first_makefile.png?raw=true" width="500px" height="600px">

--app.js--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/first_app_js.png?raw=true" width="500px" height="500px">

---

## 두번째 커밋

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/commit2.png?raw=true">

두번째 커밋에서는 **index.jade** 파일을 생성하였고 여러가지 모듈을 테스트 해보는 과정을 거쳤다 지우고 쓰고를 반복하여 코드는 확인 할 수 없지만 여러가지 모듈을 새로 추가하였고 그 모듈을 사용했다는 것을 알 수 있다. 그리고 이때 사용한 주요모듈의 정리를 하여 README.md 파일에 기록하고 use-package.md에 정리하였다.

--indx.jade--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/first_index.png?raw=true" width="500px" height="400px">

>**Note:**
>
>모듈을 테스트 하는 과정

---

## 세번째 커밋

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/commit4.png?raw=true">

이번 커밋에서 전반적익 프로젝트의 구조등이 만들어 진다. index, login, admin, layout, menu, post 등의 jade 파일들이 만들어지고 가장 중요한 app.js 파일에 많은 내용이 추가되어 프로젝트의 틀을 갖추게 된다.

--app.js--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/app_js1.png?raw=true">
<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/app_js2.png?raw=true">
<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/app_js3.png?raw=true">
<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/app_js4.png?raw=true">

>**Note:**
>
> 위의 사진이 현재까지 app.js 내용이 된다. 각 줄마다 간단한 주석이 달려있으니 내용을 참고하길 바란다.

---
또한,

이번 커밋에서는 몽고DB를 사용한 소스와 몽고스킨등의 모듈로 디비 가용성을 실험해 보는 과정을 거쳤다.

--mongo.js--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/mongo_img.png?raw=true">

>**Note:**
>몽고DB 사용 + mongoskin


추가적으로 사용자 인증모듈중 하나인 everyauth를 사용하여 twitter에서 인증값을 가져와 로그인을 하도록 소스를 추가하였다.

--everyauth code--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/everyauth.png?raw=true">

---

## 네번째 커밋

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/commit5.png?raw=true">

이번 커밋에서는 Makefile을 살짝 변경하여 테스팅 해보고 app.js 파일의 everyauth관련 오류를 해결하는 데 힘썼다. 문제는 관련 정보를 명시하지 않았다는 점 이었다. 

--app.js--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/app_error.png?raw=true">

>**Note:**
>
>또한, Makefile의 약간의 변경이 있었다. 트위터 모듈을 Makefile에 넣어 테스팅 과정을 거쳐 **node app.js** 로 실행하는 기능을 넣어보았기 때문이다.

---

## 다섯번째 커밋

마지막 커밋으로 몽고스킨 모듈을 사용하던 프로젝트는 모든 모듈을 몽구스 모듈로 변경하기로 햇다. 그래서 이번 커밋에서는 그 변경에 대한 내용을 다룬다.

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/commit6.png?raw=true">

>**Note:**
> 
> 원래 사용하던 몽고스킨 관련 모든 코드를 지우고 몽구스 모듈 관련 코드로 변경하였다.

--app.js--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/chang_app.png?raw=true">

>**Note:**
> 
> 또한 새로운 폴더인 models라는 폴더릉 생성해 완벽한 MVC패턴을 구축하였다.

--models/article.js--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/mongoose_article.png?raw=true">

--models/index.js--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/mongoose_index.png?raw=true">

--models/user.js--

<img src="https://github.com/JSPlike/session_project/blob/master/doc_img/mongoose_user.png?raw=true">

mongoskin 관련소스는 전부 삭제하여 mongoDB가 mongoose모듈을 통해 사용되도록 코드를 전부 수정하고 새로운 파일들을 만들었다.

-----

#

License
==
The MIT License (MIT)
====

Copyright © `<year>` `<copyright holders>`

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

Apache License
==============

_Version 2.0, January 2004_  
_&lt;<http://www.apache.org/licenses/>&gt;_

### Terms and Conditions for use, reproduction, and distribution

#### 1. Definitions

“License” shall mean the terms and conditions for use, reproduction, and
distribution as defined by Sections 1 through 9 of this document.

“Licensor” shall mean the copyright owner or entity authorized by the copyright
owner that is granting the License.

“Legal Entity” shall mean the union of the acting entity and all other entities
that control, are controlled by, or are under common control with that entity.
For the purposes of this definition, “control” means **(i)** the power, direct or
indirect, to cause the direction or management of such entity, whether by
contract or otherwise, or **(ii)** ownership of fifty percent (50%) or more of the
outstanding shares, or **(iii)** beneficial ownership of such entity.

“You” (or “Your”) shall mean an individual or Legal Entity exercising
permissions granted by this License.

“Source” form shall mean the preferred form for making modifications, including
but not limited to software source code, documentation source, and configuration
files.

“Object” form shall mean any form resulting from mechanical transformation or
translation of a Source form, including but not limited to compiled object code,
generated documentation, and conversions to other media types.

“Work” shall mean the work of authorship, whether in Source or Object form, made
available under the License, as indicated by a copyright notice that is included
in or attached to the work (an example is provided in the Appendix below).

“Derivative Works” shall mean any work, whether in Source or Object form, that
is based on (or derived from) the Work and for which the editorial revisions,
annotations, elaborations, or other modifications represent, as a whole, an
original work of authorship. For the purposes of this License, Derivative Works
shall not include works that remain separable from, or merely link (or bind by
name) to the interfaces of, the Work and Derivative Works thereof.

“Contribution” shall mean any work of authorship, including the original version
of the Work and any modifications or additions to that Work or Derivative Works
thereof, that is intentionally submitted to Licensor for inclusion in the Work
by the copyright owner or by an individual or Legal Entity authorized to submit
on behalf of the copyright owner. For the purposes of this definition,
“submitted” means any form of electronic, verbal, or written communication sent
to the Licensor or its representatives, including but not limited to
communication on electronic mailing lists, source code control systems, and
issue tracking systems that are managed by, or on behalf of, the Licensor for
the purpose of discussing and improving the Work, but excluding communication
that is conspicuously marked or otherwise designated in writing by the copyright
owner as “Not a Contribution.”

“Contributor” shall mean Licensor and any individual or Legal Entity on behalf
of whom a Contribution has been received by Licensor and subsequently
incorporated within the Work.

#### 2. Grant of Copyright License

Subject to the terms and conditions of this License, each Contributor hereby
grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
irrevocable copyright license to reproduce, prepare Derivative Works of,
publicly display, publicly perform, sublicense, and distribute the Work and such
Derivative Works in Source or Object form.

#### 3. Grant of Patent License

Subject to the terms and conditions of this License, each Contributor hereby
grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
irrevocable (except as stated in this section) patent license to make, have
made, use, offer to sell, sell, import, and otherwise transfer the Work, where
such license applies only to those patent claims licensable by such Contributor
that are necessarily infringed by their Contribution(s) alone or by combination
of their Contribution(s) with the Work to which such Contribution(s) was
submitted. If You institute patent litigation against any entity (including a
cross-claim or counterclaim in a lawsuit) alleging that the Work or a
Contribution incorporated within the Work constitutes direct or contributory
patent infringement, then any patent licenses granted to You under this License
for that Work shall terminate as of the date such litigation is filed.

#### 4. Redistribution

You may reproduce and distribute copies of the Work or Derivative Works thereof
in any medium, with or without modifications, and in Source or Object form,
provided that You meet the following conditions:

* **(a)** You must give any other recipients of the Work or Derivative Works a copy of
this License; and
* **(b)** You must cause any modified files to carry prominent notices stating that You
changed the files; and
* **(c)** You must retain, in the Source form of any Derivative Works that You distribute,
all copyright, patent, trademark, and attribution notices from the Source form
of the Work, excluding those notices that do not pertain to any part of the
Derivative Works; and
* **(d)** If the Work includes a “NOTICE” text file as part of its distribution, then any
Derivative Works that You distribute must include a readable copy of the
attribution notices contained within such NOTICE file, excluding those notices
that do not pertain to any part of the Derivative Works, in at least one of the
following places: within a NOTICE text file distributed as part of the
Derivative Works; within the Source form or documentation, if provided along
with the Derivative Works; or, within a display generated by the Derivative
Works, if and wherever such third-party notices normally appear. The contents of
the NOTICE file are for informational purposes only and do not modify the
License. You may add Your own attribution notices within Derivative Works that
You distribute, alongside or as an addendum to the NOTICE text from the Work,
provided that such additional attribution notices cannot be construed as
modifying the License.

You may add Your own copyright statement to Your modifications and may provide
additional or different license terms and conditions for use, reproduction, or
distribution of Your modifications, or for any such Derivative Works as a whole,
provided Your use, reproduction, and distribution of the Work otherwise complies
with the conditions stated in this License.

#### 5. Submission of Contributions

Unless You explicitly state otherwise, any Contribution intentionally submitted
for inclusion in the Work by You to the Licensor shall be under the terms and
conditions of this License, without any additional terms or conditions.
Notwithstanding the above, nothing herein shall supersede or modify the terms of
any separate license agreement you may have executed with Licensor regarding
such Contributions.

#### 6. Trademarks

This License does not grant permission to use the trade names, trademarks,
service marks, or product names of the Licensor, except as required for
reasonable and customary use in describing the origin of the Work and
reproducing the content of the NOTICE file.

#### 7. Disclaimer of Warranty

Unless required by applicable law or agreed to in writing, Licensor provides the
Work (and each Contributor provides its Contributions) on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied,
including, without limitation, any warranties or conditions of TITLE,
NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are
solely responsible for determining the appropriateness of using or
redistributing the Work and assume any risks associated with Your exercise of
permissions under this License.

#### 8. Limitation of Liability

In no event and under no legal theory, whether in tort (including negligence),
contract, or otherwise, unless required by applicable law (such as deliberate
and grossly negligent acts) or agreed to in writing, shall any Contributor be
liable to You for damages, including any direct, indirect, special, incidental,
or consequential damages of any character arising as a result of this License or
out of the use or inability to use the Work (including but not limited to
damages for loss of goodwill, work stoppage, computer failure or malfunction, or
any and all other commercial damages or losses), even if such Contributor has
been advised of the possibility of such damages.

#### 9. Accepting Warranty or Additional Liability

While redistributing the Work or Derivative Works thereof, You may choose to
offer, and charge a fee for, acceptance of support, warranty, indemnity, or
other liability obligations and/or rights consistent with this License. However,
in accepting such obligations, You may act only on Your own behalf and on Your
sole responsibility, not on behalf of any other Contributor, and only if You
agree to indemnify, defend, and hold each Contributor harmless for any liability
incurred by, or claims asserted against, such Contributor by reason of your
accepting any such warranty or additional liability.

_END OF TERMS AND CONDITIONS_

### APPENDIX: How to apply the Apache License to your work

To apply the Apache License to your work, attach the following boilerplate
notice, with the fields enclosed by brackets `[]` replaced with your own
identifying information. (Don't include the brackets!) The text should be
enclosed in the appropriate comment syntax for the file format. We also
recommend that a file or class name and description of purpose be included on
the same “printed page” as the copyright notice for easier identification within
third-party archives.

    Copyright [yyyy] [name of copyright owner]
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
      http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

Modified BSD License
====================

_Copyright © `<year>`, `<copyright holder>`_  
_All rights reserved._

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. Neither the name of the `<organization>` nor the
   names of its contributors may be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL `<COPYRIGHT HOLDER>` BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


#
