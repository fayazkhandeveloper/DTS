#pragma checksum "/Users/fayazkhan/Projects/Vistual Studio/DTS Projects/DTSWebsiteCore/PresentationLayer/Views/Admin/Edit_Page.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "2ec63d100fd8dac9645c5661018f92c5975c1d4d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Admin_Edit_Page), @"mvc.1.0.view", @"/Views/Admin/Edit_Page.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2ec63d100fd8dac9645c5661018f92c5975c1d4d", @"/Views/Admin/Edit_Page.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7701d6466ce5e2ecaed182e0fd2ad644d06e2683", @"/Views/_ViewImports.cshtml")]
    public class Views_Admin_Edit_Page : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("/action_page.php"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/fayazkhan/Projects/Vistual Studio/DTS Projects/DTSWebsiteCore/PresentationLayer/Views/Admin/Edit_Page.cshtml"
   Layout = "~/Views/Shared/adminMasterView.cshtml"; 

#line default
#line hidden
#nullable disable
            WriteLiteral("<!DOCTYPE html>\r\n<html>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2ec63d100fd8dac9645c5661018f92c5975c1d4d4194", async() => {
                WriteLiteral("\r\n    <title>Edit_Page</title>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2ec63d100fd8dac9645c5661018f92c5975c1d4d5178", async() => {
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
                        <a href=""index.php"">Dashboard</a>
                        <i class=""fa fa-circle""></i>

                    </li>
                    <li>
                        <a href=""#"">Add new Content</a>
                        <i class=""fa fa-circle""></i>
                    </li>
                </ul>

                <!--   <div class=""page-toolbar"">

                      <div class=""btn-group pull-right"">

                          <button typ");
                WriteLiteral(@"e=""button"" class=""btn green btn-sm btn-outline dropdown-toggle"" data-toggle=""dropdown""> Actions

                              <i class=""fa fa-angle-down""></i>

                          </button>

                          <ul class=""dropdown-menu pull-right"" role=""menu"">

                              <li>

                                  <a href=""#"">

                                      <i class=""icon-bell""></i> Action</a>

                              </li>

                              <li>

                                  <a href=""#"">

                                      <i class=""icon-shield""></i> Another action</a>

                              </li>

                              <li>

                                  <a href=""#"">

                                      <i class=""icon-user""></i> Something else here</a>

                              </li>

                              <li class=""divider""> </li>

                              <li>

     ");
                WriteLiteral(@"                             <a href=""#"">

                                      <i class=""icon-bag""></i> Separated link</a>

                              </li>

                          </ul>

                      </div>

                  </div> -->

            </div>

            <!-- END PAGE BAR -->
            <!-- BEGIN PAGE TITLE-->

            <h3 class=""page-title"">
                PAGE LIST

                <small>INFORMATION</small>

            </h3>

            <!-- END PAGE TITLE-->
            <!-- END PAGE HEADER-->


            <div class=""row"">

                <div class=""col-md-12"">

                    <!-- BEGIN EXAMPLE TABLE PORTLET-->

                    <div class=""portlet light bordered"">

                        <div class=""portlet-title"">

                            <div class=""caption font-dark"">

                                <i class=""icon-settings font-dark""></i>

                                <span class=""caption-subject ");
                WriteLiteral("bold uppercase\">Add New Record</span>\r\n                            </div>\r\n                            <div class=\"tools\"> </div>\r\n                        </div>\r\n\r\n                        <div class=\"portlet-body\">\r\n                            ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2ec63d100fd8dac9645c5661018f92c5975c1d4d8948", async() => {
                    WriteLiteral(@"
                                <div class=""form-group"">
                                    <label for=""email"">Title:</label>
                                    <input type=""email"" class=""form-control"">
                                </div>
                                <div class=""form-group"">
                                    <label for=""pwd"">Description:</label>
                                    <br>
                                    <textarea name=""editor1"" id=""editor1"" rows=""10"" cols=""80"">
                                                        This is my textarea to be replaced with CKEditor.
                                                    </textarea>
                                </div>

                                <button type=""submit"" class=""btn btn-primary"">Submit</button>
                            ");
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <!-- END CONTENT BODY -->\r\n\r\n    </div>\r\n");
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
