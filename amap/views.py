from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
class MapWidgetListView(TemplateView):
    template_name = "amap/widget_list.html"


class PointFieldGoogleWidgetView(TemplateView):
    template_name = "amap/google_point_widget.html"


class PointFieldGoogleStaticWidgetView(TemplateView):
    template_name = "amap/google_point_static_widget.html"


class PointFieldGoogleStaticOverlayWidgetView(TemplateView):
    template_name = "amap/google_point_static_overlay_widget.html"
