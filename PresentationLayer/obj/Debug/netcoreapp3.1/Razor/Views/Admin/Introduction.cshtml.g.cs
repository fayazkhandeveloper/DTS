#pragma checksum "/Users/fayazkhan/Projects/Vistual Studio/DTS Projects/DTSWebsiteCore/PresentationLayer/Views/Admin/Introduction.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "67e4fd93b5c37b3e1873f0a04ba58e44e1c867ad"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Admin_Introduction), @"mvc.1.0.view", @"/Views/Admin/Introduction.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/fayazkhan/Projects/Vistual Studio/DTS Projects/DTSWebsiteCore/PresentationLayer/Views/_ViewImports.cshtml"
using PresentationLayer;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/fayazkhan/Projects/Vistual Studio/DTS Projects/DTSWebsiteCore/PresentationLayer/Views/_ViewImports.cshtml"
using PresentationLayer.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"67e4fd93b5c37b3e1873f0a04ba58e44e1c867ad", @"/Views/Admin/Introduction.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7701d6466ce5e2ecaed182e0fd2ad644d06e2683", @"/Views/_ViewImports.cshtml")]
    public class Views_Admin_Introduction : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/fayazkhan/Projects/Vistual Studio/DTS Projects/DTSWebsiteCore/PresentationLayer/Views/Admin/Introduction.cshtml"
   Layout = "~/Views/Shared/adminMasterView.cshtml"; 

#line default
#line hidden
#nullable disable
            WriteLiteral("<!DOCTYPE html>\r\n<html>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "67e4fd93b5c37b3e1873f0a04ba58e44e1c867ad3576", async() => {
                WriteLiteral("\r\n    <title>Introduction</title>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "67e4fd93b5c37b3e1873f0a04ba58e44e1c867ad4563", async() => {
                WriteLiteral(@"


    <div class=""page-content-wrapper"">
        <!-- BEGIN CONTENT BODY -->
        <div class=""page-content"">
            <!-- BEGIN PAGE HEADER-->


            <div class=""alert alert-danger"" id=""delete"" style=""display:none;"">

                <a href=""#"" class=""close"" data-dismiss=""alert"" aria-label=""close"">&times;</a>

                <strong>Deleted!</strong> Record Deleted Successfully.

            </div>



            <div class=""page-bar"">

                <ul class=""page-breadcrumb"">

                    <li>
                        <a href=""index.html"">Dasboard</a>
                        <i class=""fa fa-circle""></i>
                    </li>
                    <li>
                        <a href=""#"">Introduction</a>
                        <i class=""fa fa-circle""></i>
                    </li>
                </ul>
                <div class=""page-toolbar"">
                    <div class=""btn-group pull-right"">
                        <button type=""button"" c");
                WriteLiteral(@"lass=""btn green btn-sm btn-outline dropdown-toggle"" data-toggle=""dropdown"">
                            Actions
                            <i class=""fa fa-angle-down""></i>
                        </button>
                        <ul class=""dropdown-menu pull-right"" role=""menu"">
                            <li>
                                <a href=""#"">
                                    <i class=""icon-bell""></i> Action
                                </a>
                            </li>
                            <li>
                                <a href=""#"">
                                    <i class=""icon-shield""></i> Another action
                                </a>
                            </li>
                            <li>
                                <a href=""#"">
                                    <i class=""icon-user""></i> Something else here
                                </a>
                            </li>
                            <li class=""divider");
                WriteLiteral(@"""> </li>
                            <li>
                                <a href=""#"">
                                    <i class=""icon-bag""></i> Separated link
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- END PAGE BAR -->
            <!-- BEGIN PAGE TITLE-->

            <h3 class=""page-title"">
                PAGE LIST

                <small>INFORMATION</small>

            </h3>

            <!-- END PAGE TITLE-->
            <!-- END PAGE HEADER-->

            <div class=""m-heading-1 border-green m-bordered"">
                <div class=""btn-group"">
                    <a class=""btn sbold green"" href=""Introduction_Add?introduction""> Add New Content </a>
                </div>

            </div>

            <div class=""row"">

                <div class=""col-md-12"">

                    <!-- BEGIN EXAMPLE TABLE PORTLET-->

  ");
                WriteLiteral(@"                  <div class=""portlet light bordered"">

                        <div class=""portlet-title"">

                            <div class=""caption font-dark"">

                                <i class=""icon-settings font-dark""></i>

                                <span class=""caption-subject bold uppercase"">Column Reordering</span>

                            </div>

                            <div class=""tools""> </div>
                        </div>

                        <div class=""portlet-body"">
                            <table class=""table table-striped table-bordered table-hover"" id=""sample_1"">
                                <thead>
                                    <tr>
                                        <td>Title</td>
                                        <td>Details</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
  ");
                WriteLiteral(@"                                  <tr class=""odd gradeX"">
                                        <td>Introduction 1</td>
                                        <td> Department of Tourist Services created in 1976 by Federal Government as attached department of Ministry of Tourism, Government of Pakistan. The Regional office of DTS was established in 1988 and was working under the Administrative control of   Federal Government till 31st, March, 2011. Now after devolution process under the 18th amendment this Department came under the administrative control of government of Khyber Pakhtunkhwa./td>
                                        <td>
                                            <a href=""/admin/Edit_Page"" class=""btn btn-warning btn-xs"">EDIT</a><a onclick=""return confirm('This will delete Page, continue?')"" href=""admin/Deletepages"" class=""btn btn-danger btn-xs"">Delete</a>
                                        </td>
                                    </tr>



                                  ");
                WriteLiteral(@"  <tr class=""odd gradeX"">
                                        <td>Introduction2</td>
                                        <td>
                                            Department of Tourist Services created in 1976 by Federal Government as attached department of Ministry of Tourism, Government of Pakistan. The Regional office of DTS was established in 1988 and was working under the Administrative control of   Federal Government till 31st, March, 2011. Now after devolution process under the 18th amendment this Department came under the administrative control of government of Khyber Pakhtunkhwa.

                                            The Directorate of Tourist Services have following three Act for achievement of its objectives:

                                            •The Pakistan Hotel and Restaurants Act 1976 ( The Khyber Pakhtunkhwa Hotel & Restaurants (Amendment) Act 2013
                                            •The Pakistan Travel Agencies Act 1976 ( The Khyber Pakhtunkhwa ");
                WriteLiteral(@"Travel Agencies (Amendment) Act 2013
                                            •The Pakistan Tourist Guides Act 1976 ( The Khyber Pakhtunkhwa Tourist Guides (Amendment) Act 2013
                                        </td>
                                        <td>
                                            <a href=""/admin/Edit_Page"" class=""btn btn-warning btn-xs"">EDIT</a><a onclick=""return confirm('This will delete Page, continue?')"" href=""admin/Deletepages"" class=""btn btn-danger btn-xs"">Delete</a>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>



                </div>

            </div>

        </div>

        <!-- END CONTENT BODY -->

    </div>
");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>\r\n\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
