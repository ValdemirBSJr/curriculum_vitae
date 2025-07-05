document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const output = document.getElementById('output');
    const inputLine = document.getElementById('input-line');
    const input = document.getElementById('input');
    const prompt = document.getElementById('prompt-verdadeiro').textContent;
	
	const contactInfo = `<div class="terminal-table">
        <table>
            <tbody>
                <tr>
                    <td><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMSA5IDkiIGNsYXNzPSJwaXhlbGljb24tdXNlciI+Cgk8cG9seWdvbiBmaWxsPSIjMzQzMzQxIiBwb2ludHM9IjMsMSA2LDEgNiwyIDMsMiIvPgoJPHBvbHlnb24gZmlsbD0iIzM0MzM0MSIgcG9pbnRzPSI2LDIgNywyIDcsNCA2LDQiLz4KCTxwb2x5Z29uIGZpbGw9IiNGRkU0QzIiIHBvaW50cz0iMywyIDYsMiA2LDUgNSw1IDUsNiA0LDYgNCw1IDMsNSIvPgoJPHBvbHlnb24gZmlsbD0iIzg5Q0RGRiIgcG9pbnRzPSIyLDYgNyw2IDcsOSAyLDkiLz4KPC9zdmc+" class="icon" alt="person icon"> [Name] Nome</td>
                    <td>Valdemir Bezerra de Souza Júnior</td>
                </tr>
                <tr>
                    <td><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5IDkiIGNsYXNzPSJwaXhlbGljb24tZGV2aWNlLXNtYXJ0cGhvbmUiPgoJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIzLDIgMyw3IDQsNyA0LDYgNSw2IDUsNyA2LDcgNiwyIi8+Cgk8cGF0aCBmaWxsPSIjMzQzMzQxIiBkPSJNMiwxdjdoNVYxSDJ6IE02LDdIM1YyaDNWN3oiLz4KCTxyZWN0IGZpbGw9IiNBMUEwQjQiIHg9IjQiIHk9IjYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz4KPC9zdmc+" class="icon" alt="phone icon"> [Phone] Telefone</td>
                    <td>+5583999648878</td>
                </tr>
                <tr>
                    <td><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5IDkiIGNsYXNzPSJwaXhlbGljb24tbWFpbCI+Cgk8cG9seWdvbiBmaWxsPSIjRDM4MTAwIiBwb2ludHM9IjcsNCA3LDUgNiw1IDYsNiAzLDYgMyw1IDIsNSAyLDQgMSw0IDEsNyA4LDcgOCw0Ii8+Cgk8cG9seWdvbiBmaWxsPSIjRkZCMTAwIiBwb2ludHM9IjEsMiAxLDMgMiwzIDIsNCAzLDQgMyw1IDYsNSA2LDQgNyw0IDcsMyA4LDMgOCwyIi8+Cgk8cmVjdCBmaWxsPSIjOUM1RjAwIiB4PSIxIiB5PSIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+Cgk8cmVjdCBmaWxsPSIjOUM1RjAwIiB4PSIyIiB5PSI0IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+Cgk8cmVjdCBmaWxsPSIjOUM1RjAwIiB4PSIzIiB5PSI1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxIi8+Cgk8cmVjdCBmaWxsPSIjOUM1RjAwIiB4PSI2IiB5PSI0IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+Cgk8cmVjdCBmaWxsPSIjOUM1RjAwIiB4PSI3IiB5PSIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+Cjwvc3ZnPg==" class="icon" alt="mail icon"> Email</td>
                    <td>valdemirbezerrasouza@protonmail.com / badmoon25@gmail.com</td>
                </tr>
                <tr>
                    <td><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5IDkiIGNsYXNzPSJwaXhlbGljb24tbGlua2VkaW4iPgoJPHBhdGggZmlsbD0iIzBCNjZDMSIgZD0iTTEsMVY4SDhWMXogTTMsNFY3SDJWNHogTTMsMlYzSDJWMnogTTcsNFY3SDZWNUg1VjdINFY0eiIvPgoJPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMiIgeT0iMiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPgoJPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMiIgeT0iNCIgd2lkdGg9IjEiIGhlaWdodD0iMyIvPgoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsN0g1VjVINlY3SDdWNEg0eiIvPgo8L3N2Zz4=" class="icon" alt="linkedin icon"> LinkedIn</td>
                    <td><a href="https://www.linkedin.com/in/valdemir-bezerra-80959724/" target="_blank">https://www.linkedin.com/in/valdemirbezerra/</a></td>
                </tr>
                <tr>
                    <td><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5IDkiIGNsYXNzPSJwaXhlbGljb24tZ2l0aHViIj4KCTxwYXRoIGZpbGw9IiNFQkVBRjciIGQ9Ik02LDZIOFYzSDdWMUg2VjJIM1YxSDJWM0gxVjZIM1Y3SDJWOEgzVjlINnoiLz4KCTxwYXRoIGZpbGw9IiMzNDMzNDEiIGQ9Ik0yLDBWMUgzVjJINlYxSDdWMHoiLz4KCTxwYXRoIGZpbGw9IiMzNDMzNDEiIGQ9Ik0yLDFIMVYySDBWN0gxVjhIMlY3SDNWNkgxVjNIMnoiLz4KCTxwYXRoIGZpbGw9IiMzNDMzNDEiIGQ9Ik05LDJIOFYxSDdWM0g4VjZINlY5SDdWOEg4VjdIOXoiLz4KCTxyZWN0IGZpbGw9IiMzNDMzNDEiIHg9IjIiIHk9IjgiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz4KPC9zdmc+" class="icon" alt="git icon"> GitHub</td>
                    <td><a href="https://github.com/ValdemirBSJr" target="_blank">https://github.com/ValdemirBSJr</a></td>
                </tr>
            </tbody>
        </table>
    </div>`;
	
	const about_info_en = `<div class="container">
    <div class="image-container">
        <img src="data:image/png;base64,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" alt="Image Neofetch" width="200">
    </div>
    <div class="info">
        <span>valdemir</span>@<span>curriculum-svr</span><br>
        <span>------------------------</span><br>
        <span>OS:</span> Solaris, Unix, Windows, Oracle Linux (Advanced/Sysadmin)<br>
        <span>Devops:</span> Ansible, Docker, Kubernetes, terraform, git, gitOps, OCI<br>
        <span>Virtualization:</span> VMWare, Proxmox<br>
        <span>Observability:</span> Nagios, Zabbix<br>
        <span>Server skills:</span> Apache Webserver, TOMCAT, nginx, IIS<br>
        <span>Router skills:</span> CISCO OS, Huawei OS, ZTE OS<br>
        <span>GPON skills:</span> CISCO OS, Huawei OS, ZTE OS<br>
        <span>HFC skills:</span> CISCO OS, CASA OS, ARRIS OS<br>
        <span>Scripts skills:</span> Bash, LUA, TCL, Expect, Powershell, VBScripts, GO Lang<br>
        <span>Frontend skills:</span> Bootstrap, CSS, Javascript, flet, plotly, streamlit<br>
        <span>Backend skills:</span> Django, fastAPI, PHP, SQLite, MySQL, SQL Server, PostgreSQL<br>
        <span>Programming Languages:</span> Python, C#, VB.NET, VBA For Windows Application<br>
	<span>Nocode skills:</span> N8N<br>
        <span>Network skills:</span> DHCP, DNS, LDAP<br>
        <span>Knowledge skills:</span> Datacenter Management and Enviromment, NOC, SLA, KPI, Repair HW<br>
        <span>Language skills:</span> Portuguese [Native], English [Intermediary]<br>
        <div class="colors-container">
            <div class="colors">
                <div class="color-block color1"></div>
                <div class="color-block color2"></div>
                <div class="color-block color3"></div>
                <div class="color-block color4"></div>
                <div class="color-block color5"></div>
                <div class="color-block color6"></div>
                <div class="color-block color7"></div>
                <div class="color-block color8"></div>
            </div>
            <div class="colors">
                <div class="color-block color9"></div>
                <div class="color-block color10"></div>
                <div class="color-block color11"></div>
                <div class="color-block color12"></div>
                <div class="color-block color13"></div>
                <div class="color-block color14"></div>
                <div class="color-block color15"></div>
                <div class="color-block color16"></div>
            </div>
        </div>
    </div>
</div>`;
	
	const about_info_br = `<div class="container">
    <div class="image-container">
        <img src="data:image/png;base64,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" alt="Image Neofetch" width="200">
    </div>
    <div class="info">
        <span>valdemir</span>@<span>curriculum-svr</span><br>
        <span>------------------------</span><br>
        <span>OS:</span> Solaris, Unix, Windows, Oracle Linux (Advanced/Sysadmin)<br>
        <span>Devops:</span> Ansible, Docker, Kubernetes, terraform, git, gitOps, OCI<br>
        <span>Virtualização:</span> VMWare, Proxmox<br>
        <span>Observabilidade:</span> Nagios, Zabbix<br>
        <span>Serviços Servidores:</span> Apache Webserver, TOMCAT, nginx, IIS<br>
        <span>Roteamento:</span> CISCO OS, Huawei OS, ZTE OS<br>
        <span>GPON:</span> CISCO OS, Huawei OS, ZTE OS<br>
        <span>HFC:</span> CISCO OS, CASA OS, ARRIS OS<br>
        <span>Scripts:</span> Bash, LUA, TCL, Expect, Powershell, VBScripts, GO Lang<br>
        <span>Frontend:</span> Bootstrap, CSS, Javascript, flet, plotly, streamlit<br>
        <span>Backend:</span> Django, fastAPI, PHP, SQLite, MySQL, SQL Server<br>
        <span>Programação:</span> Python, C#, VB.NET, VBA For Windows Application<br>
	<span>No Code:</span> N8N<br>
        <span>Rede:</span> DHCP, DNS, LDAP<br>
        <span>Experiência:</span> Implementação e gerenciamento Datacenter, NOC, SLA, KPI, Reparo HW<br>
        <span>Idioma:</span> Português [Nativo], Inglês [Intermediário]<br>
        <div class="colors-container">
            <div class="colors">
                <div class="color-block color1"></div>
                <div class="color-block color2"></div>
                <div class="color-block color3"></div>
                <div class="color-block color4"></div>
                <div class="color-block color5"></div>
                <div class="color-block color6"></div>
                <div class="color-block color7"></div>
                <div class="color-block color8"></div>
            </div>
            <div class="colors">
                <div class="color-block color9"></div>
                <div class="color-block color10"></div>
                <div class="color-block color11"></div>
                <div class="color-block color12"></div>
                <div class="color-block color13"></div>
                <div class="color-block color14"></div>
                <div class="color-block color15"></div>
                <div class="color-block color16"></div>
            </div>
        </div>
    </div>
</div>`;
	
	const more = `
<pre>Usage: more

Displays detailed resume information.

Informations:
  <span class="helper">--education</span>
             Bachelor’s Degree in Systems Development Analyst, UNOPAR, Brazil, 2014 – 2016.
  
  <span class="helper">--certifications</span>
             GITOPS FUNDAMENTALS.
             OCI - ORACLE CLOUD FOUNDATIONS ASSOCIATE.

  <span class="helper">--profile</span>    
             Information Technology professional with solid experience in Customer Support
             working in 24/7 shifts, including in a datacenter environment, more specifically
             in the support and management of HFC (hybrid fiber coaxial)  and GPON network.
             Experience leading a technical support team in hardware maintenance, working with
             SLAs and KPIs to deliver the best experience to end users.
             Currently looking for an opportunity in a Datacenter/NOC/Technical Support
             environment to leverage the international career.
										  							 
  <span class="helper">--soft-skills</span>
             Communication, Analytical Skills, Attention to Detail, Relationship Building, 
             Problem Solving, Teamwork, Collaboration, Solid critical thinking and problem-solving 
             skills, Willingness and ability to work in a highly collaborative team, 
             Experience working in an IT Ticketing System (such as Remedy).
								 
  <span class="helper">--technology-skills</span>
             Programming Languages (Bash, Lua, VBScripts, , C#, VB.NET, VBA For Windows Application, 
             powershell, TCL-Expect, Python, PHP, Shell Script, SQL, GO Lang), Frameworks(Django, fastAPI), 
             Hybrid-fiber-coaxial Network and GPON Equipments  (CISCO, Huawei, CASA, ARRIS, ZTE), 
             Network Routers (CISCO, Huawei, ZTE), Domain Integration (LDAP/Active Directory), 
             Monitoring Tools (ZABBIX, NAGIOS), WEB Servers (IIS, TOMCAT, Apache Webserver). 
             Advanced knowledge in Linux server, apache server, nginx, VMWare and Solaris OS. 
             Devops (Ansible, Docker, Kubernetes, terraform, git).
								 
  <span class="helper">--work-experience</span>
             Technical Support, Datacenter Management, Network Operacional Center (NOC), 
             DOCSIS/GPON Networks, Monitoring software tool (ZABBIX/NAGIOS), 
             Datacenter Enviromment (Dell, HP, Oracle), SLA, KPI, Computer hardware repair experience.
             Implementing and maintaining the network infrastructure for the Internet, VOIP,
             TV and Video-on-Demand services in 8 States.
             Working in 24/7 shifts 2nd level technical support to the Datacenter of each city
             in solving problems, ensuring quality and integrity of services;
             Management and reporting of the SLA and KPI of the services provided
             using monitoring tools (ZABBIX and NAGIOS).
             Planning and ensuring all network devices were running the correct operational
             system version.
             Responsible for the activation of network devices, ensuring their proper functioning.
             Managing IP addressing of services such Internet, VOIP, and Video-on-demand.
             Troubleshooting and solving networking issues for TCP/IP, Layer 2/3 network devices.
             Troubleshooting hardware problems in regards to SunOS based servers running services
             like DHCP, DNS and LDAP, RF Routers, CMTS CASA, CISCO and ARRIS, switches and
             routers CISCO, ZTE and Huawei.
             Participating in preventive and corrective maintenance routines with reduction of
             incidentes through identification and solution of root causes.
             Deployment and management of cache servers like Google, Akamai, Globo and Netflix.
             Management of team productivity, queue of requests and report of critical incidents
             using internal software.
			 
  <span class="helper">--developtment-portfolio</span>
             [<span class="helper">NET SERVIÇOS – Report of EdgeRouter troughput</span>]
             We implement the script python (python, SQLite, openpyxl, pandas, smtplibe for collecting 
             variations in troughputs from Edge Router interfaces. With Excel assembly functionality for 
             weekly monitoring by the datacenter which reduced the throughput analysis from 7 days to 10 minutes.
			 
             [<span class="helper">NET SERVIÇOS – CLARO combo multi CHIPS delivery control</span>]
             Application in C# (C#, SQLite) that implemented the registration control of chips delivered, 
             as well as control of signed contracts that are scanned and saved.
			 
             [<span class="helper">NET SERVIÇOS/CLARO – PGP Backups of north east plant equipment</span>]
             We implement the script TCL-EXPECT(expect, ssmtp, sendEmail, shellscript) script for daily collection
             of equipment settings and then saves these settings. After this procedure, it checks the files to verify
             that they are in compliance with the current PGP and sends them by email/telegram which enabled 100% 
             adherence in the local PGP and later in the NE Regional PGP.
			 
             [<span class="helper">CLARO SA – Blocked ups report</span>]
             Python Application (python, dominate, zipfile, html, boostrap, snmp) that scans CMTS upstreams
             in search of ups blocked by some models of docsis 2.0 equipment and assembles a report in html 
             for follow-up and handling minimizing saturation on upstream carriers that maximized customer 
             experience which increased from a few problematic ports viewed per day, with field reporting, 
             to 100% of upstream ports daily.
			 
             [<span class="helper">CLARO SA – Sentinel of the sources</span>]
             Crawler python (python, telepot, telegram, pySIMPLEGUI, beautifulSOAP) that monitors the sources 
             nagios of Nordeste Cluster in search of alarmed sources and forwards the information in case of any 
             is lost which minimized the impact to the customer, with faster responses from the field team.
			 
             [<span class="helper">CLARO SA – Cybilla of nodes and equipments</span>]
             Python Application (python, beautifulSOAP, ldap3, telebot, telegram, py-qt, snmp)
             that queries the status of operation nodes, collecting SNR, FEC, FECNC information, 
             in addition to the status of equipment authenticated in the plant via local LDAP, 
             bringing information from TX, RX, ip e SNR getting responses up to 5 times faster 
             and 100% of upstream ports from the datacenter and headend team.
			 
             [<span class="helper">CLARO SA – PEV Collection system</span>]
             Python script (python, beautifulSOAP, click openpyxl, request auth, subprocess) for collecting
             the VOIP PEV indicator notes and creating a report with the offending equipment and scraping data 
             from the datacenter page with the MAC’s of the equipments getting faster responses from the datacenter 
             team in dealing with FEC and saturation monitoring 100% of offending modems.

             [<span class="helper">CLARO SA – Bot for querying monitoring and observability systems</span>]
	     Bot developed with Python, DJANGO REST, FLET, Redis, MariaDB, Nginx, Gunicorn for technical area collaborators
             to query various signal level observability systems, network components and passive components for field access, 
	     facilitating diagnosis and impact treatment for customers.
	     
			 
             [<span class="helper">UFPB - Emotion recognition system</span>]
             C# application used for psychology course completion work that displayed images of human faces
             with differents emotions. The system collected responses from users performing the experiment, 
             as well as reaction time and whether the answer was right or wrong increasing savings with the 
             expense of a paid tool.</pre>`;

    const more_br = `
<pre>Uso: mais

Exibe informações detalhadas do currículo.

Informações:
  <span class="helper">--formação-acadêmica</span>
             Bacharelado em Análise e Desenvolvimento de Sistemas, UNOPAR, Brasil, 2014 – 2016.
  
  <span class="helper">--certificações</span>
             GITOPS FUNDAMENTALS.
             OCI - ORACLE CLOUD FOUNDATIONS ASSOCIATE.

  <span class="helper">--perfil</span>    
             Profissional de Tecnologia da Informação com sólida experiência em Suporte ao Cliente
             trabalhando em turnos 24/7, incluindo em ambiente de datacenter, mais especificamente
             no suporte e gerenciamento de redes HFC (híbrido fibra coaxial) e GPON.
             Experiência em liderar uma equipe de suporte técnico em manutenção de hardware, trabalhando com
             SLAs e KPIs para oferecer a melhor experiência aos usuários finais.
             Atualmente em busca de uma oportunidade em um ambiente de Datacenter/NOC/Suporte Técnico
             para alavancar a carreira internacional.
										  						 
  <span class="helper">--habilidades-principais</span>
             Comunicação, Habilidades Analíticas, Atenção aos Detalhes, Construção de Relacionamentos, 
             Resolução de Problemas, Trabalho em Equipe, Colaboração, Sólidas habilidades de pensamento crítico e resolução de problemas, 
             Disposição e capacidade de trabalhar em equipe altamente colaborativa, 
             Experiência em trabalhar com Sistema de Tickets de TI (como Remedy).
								 
  <span class="helper">--capacitação</span>
             Linguagens de Programação (Bash, Lua, VBScripts, C#, VB.NET, VBA para Aplicações Windows, 
             powershell, TCL-Expect, Python, PHP, Shell Script, SQL, GO Lang), Frameworks (Django, fastAPI), 
             Equipamentos de Rede Híbrido Fibra Coaxial e GPON (CISCO, Huawei, CASA, ARRIS, ZTE), 
             Roteadores de Rede (CISCO, Huawei, ZTE), Integração de Domínio (LDAP/Active Directory), 
             Ferramentas de Monitoramento (ZABBIX, NAGIOS), Servidores WEB (IIS, TOMCAT, Apache Webserver). 
             Conhecimento avançado em servidor Linux, servidor apache, nginx, VMWare e Solaris OS. 
             Devops (Ansible, Docker, Kubernetes, terraform, git).
								 
  <span class="helper">--experiência</span>
             Suporte Técnico, Gerenciamento de Datacenter, Centro de Operações de Rede (NOC), 
             Redes DOCSIS/GPON, Ferramentas de monitoramento (ZABBIX/NAGIOS), 
             Ambiente de Datacenter (Dell, HP, Oracle), SLA, KPI, Experiência em reparo de hardware de computadores.
             Implementação e manutenção da infraestrutura de rede para serviços de Internet, VOIP,
             TV e Vídeo sob Demanda em 8 Estados.
             Trabalhando em turnos 24/7 no suporte técnico de 2º nível ao Datacenter de cada cidade
             na resolução de problemas, garantindo a qualidade e integridade dos serviços;
             Gerenciamento e relatório do SLA e KPI dos serviços prestados
             usando ferramentas de monitoramento (ZABBIX e NAGIOS).
             Planejamento e garantia de que todos os dispositivos de rede estavam executando a versão correta do sistema operacional.
             Responsável pela ativação de dispositivos de rede, garantindo seu funcionamento adequado.
             Gerenciamento de endereçamento IP dos serviços como Internet, VOIP e Vídeo sob Demanda.
             Solução de problemas e resolução de questões de rede para dispositivos de rede TCP/IP, Camada 2/3.
             Solução de problemas de hardware em servidores baseados em SunOS executando serviços
             como DHCP, DNS e LDAP, Roteadores RF, CMTS CASA, CISCO e ARRIS, switches e
             roteadores CISCO, ZTE e Huawei.
             Participação em rotinas de manutenção preventiva e corretiva com redução de
             incidentes através da identificação e solução de causas raiz.
             Implantação e gerenciamento de servidores de cache como Google, Akamai, Globo e Netflix.
             Gerenciamento da produtividade da equipe, fila de solicitações e relatório de incidentes críticos
             usando software interno.
			 
  <span class="helper">--portfolio</span>
             [<span class="helper">NET SERVIÇOS – Relatório de throughput de roteador de borda</span>]
             Implementamos o script python (python, SQLite, openpyxl, pandas, smtplib para coleta 
             de variações de throughput das interfaces do roteador de borda. Com funcionalidade de montagem em Excel para 
             monitoramento semanal pelo datacenter, que reduziu a análise de throughput de 7 dias para 10 minutos.
			 
             [<span class="helper">NET SERVIÇOS – Controle de entrega de chips multi CLARO combo</span>]
             Aplicação em C# (C#, SQLite) que implementou o controle de registro de chips entregues, 
             bem como controle de contratos assinados que são digitalizados e salvos.
			 
             [<span class="helper">NET SERVIÇOS/CLARO – Backups PGP de equipamentos da planta nordeste</span>]
             Implementamos o script TCL-EXPECT (expect, ssmtp, sendEmail, shellscript) para coleta diária
             das configurações dos equipamentos e, em seguida, salva essas configurações. Após esse procedimento, verifica os arquivos para garantir
             que estão em conformidade com o PGP atual e os envia por email/telegram, o que permitiu 100% 
             de aderência ao PGP local e posteriormente ao PGP Regional NE.
			 
             [<span class="helper">CLARO SA – Relatório de ups bloqueados</span>]
             Aplicação em Python (python, dominate, zipfile, html, bootstrap, snmp) que escaneia upstreams de CMTS
             em busca de ups bloqueados por alguns modelos de equipamentos docsis 2.0 e monta um relatório em html 
             para acompanhamento e tratamento, minimizando a saturação nas portadoras upstream, o que maximiza a experiência do cliente,
             aumentando de algumas portas problemáticas visualizadas por dia, com relatório de campo, 
             para 100% das portas upstream diariamente.
			 
             [<span class="helper">CLARO SA – Sentinela das fontes</span>]
             Crawler em python (python, telepot, telegram, pySIMPLEGUI, beautifulSOAP) que monitora as fontes 
             nagios do Cluster Nordeste em busca de fontes alarmadas e encaminha a informação em caso de qualquer 
             perda, o que minimizou o impacto para o cliente, com respostas mais rápidas da equipe de campo.
			 
             [<span class="helper">CLARO SA – Cybilla de nós e equipamentos</span>]
             Aplicação em Python (python, beautifulSOAP, ldap3, telebot, telegram, py-qt, snmp)
             que consulta o status dos nós de operação, coletando informações de SNR, FEC, FECNC, 
             além do status dos equipamentos autenticados na planta via LDAP local, 
             trazendo informações de TX, RX, IP e SNR, obtendo respostas até 5 vezes mais rápidas 
             e 100% das portas upstream da equipe do datacenter e headend.
			 
             [<span class="helper">CLARO SA – Sistema de coleta de PEV</span>]
             Script em Python (python, beautifulSOAP, click, openpyxl, request auth, subprocess) para coleta
             das notas do indicador PEV de VOIP e criação de um relatório com os equipamentos ofensores e raspagem de dados 
             da página do datacenter com os MACs dos equipamentos, obtendo respostas mais rápidas da equipe do datacenter 
             no tratamento de monitoramento de FEC e saturação de 100% dos modems ofensores.

             [<span class="helper">CLARO SA – Bot de consulta aos sistemas de monitoramento e observabilidade</span>]
             Bot desenvolvido com python, DJANGO REST, FLET, Redis, MariaDB, Nginx, Gunicorn para os colaboradores
	     da área técnica fazerem consultas aos vários sistemas de observabilidade de níveis de sinais, dos componentes
             de rede e passivos para acesso em campo facilitando o diagnóstico e tratativa de impacto aos clientes.
			 
             [<span class="helper">UFPB - Sistema de reconhecimento de emoções</span>]
             Aplicação em C# usada para trabalho de conclusão de curso de psicologia que exibia imagens de rostos humanos
             com diferentes emoções. O sistema coletava respostas dos usuários realizando o experimento, 
             bem como o tempo de reação e se a resposta estava certa ou errada, aumentando a economia com a 
             despesa de uma ferramenta paga.</pre>`;
	
	const commands = {
		'help': 'Available commands: help, about, contact, more, clear',
        'ajuda': 'Comandos disponíveis: ajuda, sobre, contato, mais, limpar',
		'about': about_info_en,
        'sobre': about_info_br,
		'contact': contactInfo,
        'contato': contactInfo,
		'more': more,
		'mais': more_br
    };

    function executeCommand(command) {
    command = command.toLowerCase();
	
	if (command.trim() === '') {
        return;
    }
	    
    if (command === 'clear' || command === 'limpar') {
        output.innerHTML = welcomeTable;
    } else if (commands[command]) {
        output.innerHTML += `<span class="prompt">${prompt}</span>${command}\n${commands[command]}\n`;
    } else {
        output.innerHTML += `<span class="prompt">${prompt}</span>${command}\n[Command not found] Comando não encontrado. [Try 'help' for available commands] Digite 'ajuda' para ver os comandos disponíveis.\n`;
    }
    input.value = '';
    terminal.scrollTop = terminal.scrollHeight;
}

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            executeCommand(command);
        }
    });
	
	window.addEventListener('focus', () => {
        input.focus();
    });
	
	document.addEventListener('click', (event) => {
        if (event.target !== input) {
            input.focus();
        }
    });
	
	const welcomeTable = `
<pre class="ascii-art">
+-----------------------------------------------------------------------------------------------------------------------------+
|             ╦ ╦╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗  ╔╦╗╔═╗                  |              ╔╗ ╔═╗╔╦╗   ╦  ╦╦╔╗╔╔╦╗╔═╗  ╔═╗╔═╗                |
|             ║║║║╣ ║  ║  ║ ║║║║║╣    ║ ║ ║                  |              ╠╩╗║╣ ║║║───╚╗╔╝║║║║ ║║║ ║  ╠═╣║ ║                |
|             ╚╩╝╚═╝╩═╝╚═╝╚═╝╩ ╩╚═╝   ╩ ╚═╝                  |              ╚═╝╚═╝╩ ╩    ╚╝ ╩╝╚╝═╩╝╚═╝  ╩ ╩╚═╝                |
+-----------------------------------------------------------------------------------------------------------------------------+                          
|                                   ╔═╗╦ ╦╦═╗╦═╗╦╔═╗╦ ╦╦  ╦ ╦╔╦╗  ╦  ╦╦╔╦╗╔═╗╔═╗                                              |
|                                   ║  ║ ║╠╦╝╠╦╝║║  ║ ║║  ║ ║║║║  ╚╗╔╝║ ║ ╠═╣║╣                                               |
|                                   ╚═╝╚═╝╩╚═╩╚═╩╚═╝╚═╝╩═╝╚═╝╩ ╩   ╚╝ ╩ ╩ ╩ ╩╚═╝                                              |
+-----------------------------------------------------------------------------------------------------------------------------+
|                                                                                                                             |
| ██╗   ██╗ █████╗ ██╗     ██████╗ ███████╗███╗   ███╗██╗██████╗     ██████╗ ███████╗███████╗███████╗██████╗ ██████╗  █████╗  |
| ██║   ██║██╔══██╗██║     ██╔══██╗██╔════╝████╗ ████║██║██╔══██╗    ██╔══██╗██╔════╝╚══███╔╝██╔════╝██╔══██╗██╔══██╗██╔══██╗ |
| ██║   ██║███████║██║     ██║  ██║█████╗  ██╔████╔██║██║██████╔╝    ██████╔╝█████╗    ███╔╝ █████╗  ██████╔╝██████╔╝███████║ |
| ╚██╗ ██╔╝██╔══██║██║     ██║  ██║██╔══╝  ██║╚██╔╝██║██║██╔══██╗    ██╔══██╗██╔══╝   ███╔╝  ██╔══╝  ██╔══██╗██╔══██╗██╔══██║ |
|  ╚████╔╝ ██║  ██║███████╗██████╔╝███████╗██║ ╚═╝ ██║██║██║  ██║    ██████╔╝███████╗███████╗███████╗██║  ██║██║  ██║██║  ██║ |
|   ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ |
+-----------------------------------------------------------------------------------------------------------------------------+
|              Try "<span class='helper'>help</span>" for more information.              |            Digite "<span class='helper'>ajuda</span>" para ver mais informações.           |
+-----------------------------------------------------------------------------------------------------------------------------+
</pre>
`;

    output.innerHTML = `<div id="loading"><span class="loading">[Loading] Aguarde<span>.</span><span>.</span><span>.</span></span></div>`;
    inputLine.style.display = 'none';
	
	const initMessages = [
        `[ <span class="loading">OK</span> ] Started system services...`,
        `[ <span class="loading">OK</span> ] Loaded kernel modules...`,
        `[ <span class="loading">OK</span> ] Starting network services...`,
        `[ <span class="loading">OK</span> ] Initialized hardware...`,
        `[ <span class="loading">OK</span> ] Started user services...`,
        "System ready!"
    ];
	

    function showInitMessages(index) {
        if (index < initMessages.length) {
            output.innerHTML += `<div class="init-message">${initMessages[index]}</div>`;
            terminal.scrollTop = terminal.scrollHeight;
            setTimeout(() => showInitMessages(index + 1), 500);
        } else {
            setTimeout(() => {
				document.getElementById('loading').remove();
                document.querySelectorAll('.init-message').forEach(el => el.remove());
                output.innerHTML += `${welcomeTable}\n`;
                inputLine.style.display = 'flex';
                input.focus();
            }, 500);
        }
    }
	
	setTimeout(() => showInitMessages(0), 1500);
	
	
});
